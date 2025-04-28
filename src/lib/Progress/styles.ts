import { oneLine } from "common-tags";

export const CircularRangeStyles = oneLine`
progress-circular-range
stroke-primary-500
transition-colors

data-[state=complete]:stroke-primary-400!
`;

export const CircularTrackStyles = oneLine`
progress-circular-track
relative
rounded-full
stoke-neutral-primary-100/20
`;

export const CircularValueTextStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
absolute
font-black
left-1/2
progress-circular-value-text
text-primary-100
top-1/2
tracking-tight
`;

export const LabelStyles = oneLine`
block
h-0
invisible
progress-label
`;

export const RangeStyles = oneLine`
bg-primary-500
h-full
progress-range
transition-colors

data-[state=complete]:bg-primary-400
`;

export const TrackStyles = oneLine`
bg-neutral-primary-100/20
h-6
overflow-hidden
progress-track
relative
rounded-full
`;
