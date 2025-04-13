import { oneLine } from "common-tags";

export const ContentContainerStyles = oneLine`
bg-neutral-secondary-900
collapsible-content-container
overflow-hidden
mx-auto
rounded-b-lg
text-neutral-primary-400
w-[calc(100%-32px)]

data-[state=closed]:animate-collapsible-slide-up
data-[state=open]:animate-collapsible-slide-down
`;

export const ContentStyles = oneLine`
collapsible-content
flex
flex-col
gap-2
p-4
`;

export const TriggerStyles = oneLine`
bg-transparent
collapsible-trigger
duration-300
ease-out
flex
items-center
justify-between
mx-auto
outline-hidden
p-4
relative
border-2
border-neutral-primary-400
rounded-lg
text-neutral-primary-200
transition-all
w-full

data-[state=open]:border-primary-500
data-[state=open]:shadow-[0_0_20px_--alpha(var(--color-primary-600)_/_0.8)]

data-disabled:cursor-not-allowed
data-disabled:opacity-50

focus-visible:border-primary-500

hover:cursor-pointer
hover:border-neutral-200
`;
