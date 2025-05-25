<script setup lang="ts">
// Packages
import { Timer } from "@ark-ui/vue/timer";

// Styles
import {
  AreaStyles,
  ButtonStyles,
  ControlStyles,
  SegmentLabelStyles,
  SegmentStyles,
  SegmentValueStyles,
  SeparatorStyles,
} from "./styles";

// Types
import type { Props } from "./types";

// Props
const {
  className = "",
  hideDays,
  hideHours,
  hideMinutes,
  hideReset,
  hideToggle,
  separator,
  ...rest
} = defineProps<Props>();

const segments = [
  !hideDays && !hideHours && !hideMinutes && "days",
  !hideHours && !hideMinutes && "hours",
  !hideMinutes && "minutes",
  "seconds",
].filter((segment): segment is "days" | "hours" | "minutes" | "seconds" =>
  Boolean(segment),
);

const controls = [
  ...(!hideToggle ? ["start", "resume", "pause"] : []),
  !hideReset && "reset",
].filter((control): control is "start" | "resume" | "pause" | "reset" =>
  Boolean(control),
);

const controlIcons: Record<"start" | "resume" | "pause" | "reset", string> = {
  start: "fa-play",
  resume: "fa-play",
  pause: "fa-pause",
  reset: "fa-rotate-left",
};
</script>

<template>
  <Timer.Root
    v-bind="rest"
    @complete="$emit('complete', $event)"
    @tick="$emit('tick', $event)"
    :class="className"
  >
    <Timer.Area :class="AreaStyles">
      <template v-for="segment in segments">
        <div :class="SegmentStyles">
          <Timer.Item :class="SegmentValueStyles" :type="segment" />
          <span :class="SegmentLabelStyles">{{ segment }}</span>
        </div>
        <Timer.Separator
          v-if="segment !== 'seconds'"
          :class="SeparatorStyles"
          >{{ separator }}</Timer.Separator
        >
      </template>
    </Timer.Area>
    <Timer.Control :class="ControlStyles">
      <Timer.ActionTrigger
        v-for="control in controls"
        :action="control"
        :class="ButtonStyles"
      >
        <i aria-hidden="true" :class="['fa-solid', controlIcons[control]]"></i>
        <span>{{ control }}</span>
      </Timer.ActionTrigger>
    </Timer.Control>
  </Timer.Root>
</template>
