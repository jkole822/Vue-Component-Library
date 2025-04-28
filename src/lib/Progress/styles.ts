import { oneLine } from "common-tags";

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
