import { ComponentChildren } from "preact";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonRadius = "sm" | "md" | "lg" | "full" | "none";

export type ButtonType = "button" | "reset" | "submit";

export interface ButtonProperties {
    className?: string;
    children?: ComponentChildren;
    fullWidth?: boolean;
    radius?: ButtonRadius;
    size?: ButtonSize;
    type?: ButtonType;
}

export const baseCss = "flex justify-center border border-transparent shadow-sm text-sm "
    + "font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150";

export function getRadius(radius: ButtonRadius) {
    switch (radius) {
        case "sm": return "rounded";
        case "md": return "rounded-md";
        case "lg": return "rounded-lg";
        case "full": return "rounded-full";
        case "none": return undefined;

        default: return undefined;
    }
}

export function getSize(size: ButtonSize): string | undefined {
    switch (size) {
        case "sm": return "px-2 py-1";
        case "md": return "px-4 py-2";
        case "lg": return "px-6 py-3";

        default: return undefined;
    }
}
