import { oneLine } from "common-tags";

export const LabelStyles = oneLine`
-translate-x-1/2
absolute
angle-slider-label
font-light
left-1/2
text-center
text-neutral-400
text-sm
top-[55%]
`;

export const MarkerStyles = oneLine`
absolute
angle-slider-marker
bg-white
rounded-full
scale-[0.5]
top-0
`;

export const ProgressCircleStyles = oneLine`
angle-slider-progress-circle
text-primary-500

in-data-invalid:text-red-500
`;

export const RootStyles = oneLine`
angle-slide-root
cursor-pointer
relative
w-fit
`;

export const ThumbContainerStyles = oneLine`
-translate-x-1/2
absolute
h-full
left-1/2
outline-none
top-0
`;

export const ThumbStyles = oneLine`
absolute
bg-primary-400
rounded-full
scale-[1.5]
top-0

in-data-invalid:bg-red-400
`;

export const ValueTextStyles = oneLine`
-translate-x-1/2
absolute
angle-slider-value-text
font-bold
left-1/2
text-4xl
text-neutral-primary-50
top-1/3
`;
