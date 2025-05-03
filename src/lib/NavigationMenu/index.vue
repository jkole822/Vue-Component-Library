<script setup lang="ts">
// Packages
import { computed, h, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { v4 as uuid } from "uuid";

// Components
import Accordion from "../Accordion/index.vue";
import { MenuItem, MobileAccordionNavigationContent } from "./components";
import Popover from "../Popover/index.vue";

// Styles
import {
  ArrowStyles,
  ContentWithCallout,
  ContentWithoutCallout,
  IconStyles,
  LineStyles,
  LineTopBottomStyles,
  MobileMenuButtonStyles,
  MobilePopoverContentStyles,
  MobilePopoverStyles,
  RootStyles,
  TitleContainerStyles,
  TitleStyles,
  TriggerIndicatorStyles,
  TriggerStyles,
  ViewportStyles,
} from "./styles";

// Types
import { HeadingLevelEnum } from "../../types";
import {
  type NavigationMenuItem,
  NavigationMenuOrientationEnum,
  type Props,
} from "./types";

// Props
const {
  className = "",
  homeHref,
  icon,
  items,
  orientation,
  title,
} = defineProps<Props>();

// State
let activeContentHeight = ref(0);
let activeContentWidth = ref(0);
let activeItem = ref<number | null>(null);
let arrowTop = ref(0);
let arrowRight = ref(0);
let contentStyles = ref("");
let mobileNavigationOpen = ref(false);
let motion = ref<"left" | "right" | null>(null);
let previousItem = ref<number | null>(null);
let subMenuOpen = ref(false);
let viewportOpen = ref(false);

// Helpers
const dataMotion = (index: number) => {
  if (
    (activeItem || activeItem === 0) &&
    motion &&
    activeItem.value === index
  ) {
    if (motion.value === "left") return "from-end";
    return "from-start";
  } else if (
    (previousItem.value || previousItem.value === 0) &&
    motion.value &&
    previousItem.value === index
  ) {
    if (motion.value === "left") return "to-start";
    return "to-end";
  }

  return null;
};

const handleMenuItemKeydown = (
  e: KeyboardEvent,
  { isFirstItem, isLastItem }: { isFirstItem: boolean; isLastItem: boolean }
) => {
  const items = Array.from(
    document.querySelectorAll(
      ".navigation-menu-content[data-expanded=true] .navigation-menu-item"
    )
  );

  if (e.code === "Tab" && !e.shiftKey && isLastItem && items?.length > 0) {
    const item = items[0] as HTMLAnchorElement | HTMLButtonElement;
    item.focus();
    e.preventDefault();
  } else if (
    e.shiftKey &&
    e.code === "Tab" &&
    isFirstItem &&
    items?.length > 0
  ) {
    const item = items[items.length - 1] as
      | HTMLAnchorElement
      | HTMLButtonElement;
    item.focus();
    e.preventDefault();
  } else if (e.code === "Escape") {
    subMenuOpen.value = false;
    viewportOpen.value = false;
    document.getElementById(`navigation-menu-${activeItem.value}`)?.focus();
  }
};

const handleTriggerMouseEnter = ({
  disabled,
  hasSubMenu,
  index,
}: {
  disabled?: boolean;
  hasSubMenu: boolean;
  index: number;
}) => {
  if (!disabled) {
    if (
      (activeItem.value || activeItem.value === 0) &&
      activeItem.value !== index
    ) {
      motion.value = activeItem.value > index ? "right" : "left";
      previousItem.value = activeItem.value;
    } else {
      motion.value = null;
      previousItem.value = null;
    }

    viewportOpen.value = hasSubMenu;
    activeItem.value = index;
  }
};

const handleTriggerKeydown = async (
  e: KeyboardEvent,
  props: {
    disabled?: boolean;
    hasSubMenu: boolean;
    index: number;
  }
) => {
  if (e.code === "Enter" || e.code === "Space") {
    handleTriggerMouseEnter(props);

    await nextTick();

    const item = document.querySelector(
      ".navigation-menu-content[data-expanded=true] .navigation-menu-item"
    ) as HTMLAnchorElement;

    if (item) {
      item.focus();
    }
  }
};

const handleTriggerMouseLeave = ({ index }: { index: number }) => {
  setTimeout(() => {
    if (activeItem.value === index && !subMenuOpen.value)
      activeItem.value = null;
  }, 200);
};

const hasImage = (menuItems: NavigationMenuItem[]) =>
  menuItems?.some((item) => !!item.image);

const updateHeight = () => {
  contentStyles.value = `
			height: ${document.documentElement.scrollHeight}px;
		`;
};

// Computed
const accordionItems = computed(() =>
  items
    .filter((item) => item.items?.length > 0)
    .map(({ disabled, items, title }, index) => ({
      content: () => [
        h(MobileAccordionNavigationContent, {
          items,
          hasImage,
          isFirstItem: index === 0,
          isLastItem: index === items.length - 1,
        }),
      ],
      description: "",
      disabled,
      id: uuid(),
      isFirstItem: index === 0,
      isLastItem: index === items.length - 1,
      title,
    }))
);

// Watchers
watch([activeItem, subMenuOpen], ([activeItem, subMenuOpen]) => {
  if (activeItem || activeItem === 0 || subMenuOpen) {
    nextTick(() => {
      const activeTrigger = document.querySelector(
        ".navigation-menu-trigger[data-expanded=true]"
      );

      if (
        activeTrigger &&
        orientation !== NavigationMenuOrientationEnum.Vertical
      ) {
        const { right, width } = activeTrigger.getBoundingClientRect();
        const distanceFromRight = window.innerWidth - right - 24 + 0.5 * width;

        arrowRight.value = distanceFromRight;
      } else if (activeTrigger) {
        const { top, height } = activeTrigger.getBoundingClientRect();
        const distanceFromBottom = top - 106 + 0.5 * height;

        arrowTop.value = distanceFromBottom;
      }

      const expandedContent = document.querySelector(
        `.navigation-menu-content[data-expanded=true]`
      );

      if (expandedContent) {
        activeContentHeight.value = expandedContent.clientHeight;
        activeContentWidth.value = expandedContent.clientWidth;
      }
    });
  } else {
    viewportOpen.value = false;
  }
});

// Life Cycle
onMounted(() => {
  contentStyles.value = `
			height: ${document.documentElement.scrollHeight}px;
		`;

  window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeight);
});
</script>

<template>
  <div :class="[className, '[&_[data-part=positioner]]:transform-none!']">
    <component
      v-if="icon || title"
      :class="TitleContainerStyles"
      :href="homeHref"
      :is="homeHref ? 'a' : 'div'"
    >
      <figure v-if="icon">
        <img v-bind="icon" :class="IconStyles" />
        <figcaption class="h-0 opacity-0 w-0">Navigate to Home</figcaption>
      </figure>
      <h1 v-if="title" :class="TitleStyles">{{ title }}</h1>
    </component>
    <div :class="RootStyles" :data-orientation="orientation">
      <ul role="menubar">
        <li
          v-for="(
            { disabled, href, items: _items, target, title }, index
          ) in items"
          role="presentation"
        >
          <component
            @keydown="
              (event: KeyboardEvent) =>
                handleTriggerKeydown(event, {
                  disabled,
                  hasSubMenu: _items.length > 0,
                  index,
                })
            "
            @mouseenter="
              () =>
                handleTriggerMouseEnter({
                  disabled,
                  hasSubMenu: _items.length > 0,
                  index,
                })
            "
            @mouseleave="() => handleTriggerMouseLeave({ index })"
            :aria-haspopup="_items.length > 0"
            :class="TriggerStyles"
            :data-expanded="activeItem === index"
            :disabled="disabled"
            :href="href"
            :id="`navigation-menu-${index}`"
            :is="href ? 'a' : 'button'"
            :target="target"
            role="menuitem"
            tabindex="0"
          >
            {{ title }}
            <i
              v-if="_items.length > 0"
              aria-hidden="true"
              :class="TriggerIndicatorStyles"
            ></i>
          </component>
        </li>
      </ul>
      <div
        :class="ViewportStyles"
        :data-expanded="viewportOpen"
        :data-orientation="orientation"
        :style="{
          height: `${activeContentHeight}px`,
          width: `${activeContentWidth}px`,
        }"
      >
        <div
          aria-hidden="true"
          :class="ArrowStyles"
          :data-orientation="orientation"
          :style="
            orientation === NavigationMenuOrientationEnum.Vertical
              ? { top: `${arrowTop}px` }
              : { right: `${arrowRight}px` }
          "
        >
          <svg
            :style="{ transform: `scale${1.02}` }"
            display="block"
            viewBox="0 0 30 30"
          >
            <g transform="rotate(0 15 15) translate(0 2)">
              <path
                fill="none"
                d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
              ></path>
              <path
                stroke="none"
                d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
              ></path>
            </g>
          </svg>
        </div>
        <div
          v-for="({ items: _items }, index) in items"
          @mouseenter="() => (subMenuOpen = true)"
          @mouseleave="
            () => {
              subMenuOpen = false;
              activeItem = null;
            }
          "
          :aria-labelledby="`navigation-menu-${index}`"
          :class="hasImage(_items) ? ContentWithCallout : ContentWithoutCallout"
          :data-expanded="activeItem === index"
          :data-motion="dataMotion(index)"
          :data-orientation="orientation"
          :key="index"
          role="menu"
          tabindex="0"
        >
          <MenuItem
            v-for="(item, index) in _items"
            @keydown="
              handleMenuItemKeydown($event, {
                isFirstItem: index === 0,
                isLastItem: index === _items.length - 1,
              })
            "
            :index="index"
            :isFirstItem="index === 0"
            :isLastItem="index === _items.length - 1"
            :item="item"
            :key="item.title"
          ></MenuItem>
        </div>
      </div>
    </div>
    <Popover
      @update:open="mobileNavigationOpen = $event"
      :contentClass="MobilePopoverContentStyles"
      :contentStyles="contentStyles"
      :open="mobileNavigationOpen"
    >
      <template v-slot:trigger>
        <button :class="MobilePopoverStyles">
          <div :class="MobileMenuButtonStyles({ open: mobileNavigationOpen })">
            <svg viewBox="0 0 32 32">
              <path
                :class="LineTopBottomStyles"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path :class="LineStyles" d="M7 16 27 16"></path>
            </svg>
          </div>
        </button>
      </template>
      <Accordion
        collapsible
        :headingLevel="HeadingLevelEnum.Two"
        :items="accordionItems"
      ></Accordion>
      <a
        v-for="(item, index) in items.filter((item) => !!item.href)"
        v-bind="item"
        :class="TriggerStyles"
        :key="index"
      >
        {{ item.title }}
      </a>
    </Popover>
  </div>
</template>
