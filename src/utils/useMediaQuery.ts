// utils/useMediaQuery.ts
import { ref, onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

export function useMediaQuery(query: string): Ref<boolean> {
  const matches = ref(false);
  let mediaQuery: MediaQueryList;

  const updateMatch = () => {
    matches.value = mediaQuery.matches;
  };

  onMounted(() => {
    mediaQuery = window.matchMedia(query);
    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);
  });

  onUnmounted(() => {
    mediaQuery?.removeEventListener("change", updateMatch);
  });

  return matches;
}
