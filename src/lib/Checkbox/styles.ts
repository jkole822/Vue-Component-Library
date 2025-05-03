import { oneLine } from "common-tags";

export const ContainerStyles = oneLine`
checkbox-container
cursor-pointer
group
w-fit
`;

export const InputStyles = oneLine`
checkbox-input
flex
items-center

[&[data-state=checked]_svg_.path]:stroke-primary-500
[&[data-state=checked]_svg_.path]:[stroke-dasharray:70.5096664428711_9999999]
[&[data-state=checked]_svg_.path]:[stroke-dashoffset:-262.2723388671875]

[&[data-state=checked][data-invalid]_svg_.path]:stroke-red-500

[&[data-disabled]_svg]:cursor-not-allowed

[&[data-disabled]_[data-part=label]]:cursor-not-allowed
[&[data-disabled]_[data-part=label]]:!text-neutral-primary-600

[&[data-disabled]_[data-part=label]:after]:!w-0

[&[data-disabled]_svg_.path]:!stroke-neutral-primary-600

[&:focus-within_[data-part=label]]:text-neutral-primary-50

[&:focus-within_[data-part=label]:after]:w-full
`;

export const LabelStyles = oneLine`
checkbox-label
cursor-pointer
duration-300
ml-1.5
relative
text-neutral-primary-200
transition-all

after:-bottom-0.5
after:[transition-timing-function:cubic-bezier(0.25,0.8,0.25,1)]
after:absolute
after:bg-primary-500
after:duration-[400ms]
after:h-0.5
after:left-0
after:pointer-events-none
after:transition-all
after:w-0

in-data-invalid:after:bg-red-500
`;

export const PathStyles = oneLine`
[stroke-dasharray:241_9999999]
[stroke-dashoffset:0]
[stroke-linecap:round]
[stroke-linejoin:round]
[transition:stroke-dasharray_0.5s_ease,_stroke-dashoffset_0.5s_ease]
checkbox-path
fill-none
origin-center
path
scale-50
stroke-6
stroke-neutral-primary-200

in-data-invalid:stroke-red-500
`;

export const VectorStyles = oneLine`
checkbox-vector
overflow-visible
`;
