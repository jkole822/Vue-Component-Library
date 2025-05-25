import { oneLine } from "common-tags";

export const AreaBackgroundStyles = oneLine`
color-picker-area-background
h-50
mb-6
rounded
`;

export const CenterStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
left-1/2
top-1/2
`;

export const ChannelInputStyles = oneLine`
color-picker-channel-input
outline-none
px-2
ring
ring-neutral-primary-500
rounded
transition-all

focus-visible:ring-2
focus-visible:ring-primary-400

hover:ring-primary-400
`;

export const ChannelSliderTrackStyles = oneLine`
color-picker-channel-slider-track
h-4
relative
rounded
`;

export const ContentStyles = oneLine`
bg-neutral-secondary-950
color-picker-content
p-4
ring
ring-neutral-secondary-700
rounded-lg
w-[var(--available-width)]

xs:w-75
`;

export const ControlStyles = oneLine`
color-picker-control
duration-200
outline-none
p-3
relative
ring-2
rounded-lg
transition-colors
w-full

in-data-disabled:cursor-not-allowed
in-data-disabled:ring-neutral-secondary-600!

data-focus:ring-primary-500

in-data-invalid:ring-red-500!
`;

export const ControlViewStyles = oneLine`
color-picker-view
gap-3
grid
grid-cols-1
grow

xs:grid-cols-2
xs:data-[format=hsla]:grid-cols-3
`;

export const EyeDropperIconStyles = oneLine`
color-picker-eye-dropper-icon
fa-eye-dropper
fa-solid
text-xl
`;

export const EyeDropperTriggerStyles = oneLine`
color-picker-eye-dropper-trigger
cursor-pointer
outline-none
relative
ring
ring-neutral-primary-200
rounded
transition-all
w-14

focus-visible:ring-2
focus-visible:ring-primary-400

hover:ring-primary-400
hover:text-primary-400
`;

export const LabelStyles = oneLine`
block
capitalize
color-picker-label
duration-200
font-medium
mb-2
text-sm
transition-colors

in-data-invalid:text-red-400
`;

export const SwatchStyles = oneLine`
color-picker-swatch
relative
rounded
size-5
`;

export const SwatchTriggerStyles = oneLine`
color-picker-swatch-trigger
outline-none
ring-primary-neutral-50
rounded
transition-all

focus-visible:ring-2
focus-visible:ring-primary-neutral-50

hover:ring
`;

export const ThumbStyles = oneLine`
border-2
border-neutral-primary-50
color-picker-thumb
outline-none
rounded-full
size-4
`;

export const TriggerStyles = oneLine`
color-picker-trigger
cursor-pointer
inline-flex
items-center
justify-center
size-6
`;

export const ViewStyles = oneLine`
color-picker-view
gap-2
grid
grid-cols-2

data-[format=hsla]:grid-cols-3
`;
