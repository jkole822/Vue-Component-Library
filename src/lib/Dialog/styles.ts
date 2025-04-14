import { oneLine } from "common-tags";

export const CloseButtonStyles = oneLine`
absolute
appearance-none
dialog-close-button
duration-200
ease-in-out
h-6
inline-flex
items-center
justify-center
outline-hidden
p-1
right-4
ring-primary-400
rounded-full
text-primary-600
top-4
transition-all
w-6

focus:ring-2

hover:bg-primary-100 
`;

export const ContentStyles = oneLine`
-translate-x-1/2
-translate-y-1/2
animate-dialog-scale-out
bg-neutral-secondary-900
dialog-content
fixed
left-1/2
max-h-[85vh]
max-w-[28.125rem]
origin-center
p-6
rounded-xl
shadow-xl
top-1/2
w-[90vw]
z-50

data-[state=open]:animate-dialog-scale-in
`;

export const DescriptionStyles = oneLine`
dialog-description
leading-normal
my-3
text-neutral-primary-400
`;

export const HeadingStyles = oneLine`
dialog-heading
font-medium
m-0
text-neutral-primary-200
text-lg
`;

export const OverlayStyles = oneLine`
animate-overlay-fade-out
bg-neutral-secondary-900/50
dialog-overlay
fixed
inset-0
z-50

data-[state=open]:animate-overlay-fade-in
`;
