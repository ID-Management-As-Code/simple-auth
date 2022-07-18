/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { joinClasses } from "@utilities/css.ts";
import { baseCss, ButtonProperties, ButtonRadius, ButtonSize, getRadius, getSize } from "./utilities.ts";

interface Properties extends ButtonProperties {
}

export const PrimaryButton = ({
    className,
    children,
    fullWidth,
    radius = "md",
    size = "md",
    type
}: Properties) => {
    const css = joinClasses(
        baseCss,
        getRadius(radius),
        getSize(size),
        fullWidth ? "w-full" : undefined,
        "text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-400",
        className
    );

    return (
        <button type={type} className={css}>
            {children}
        </button>
    );
}
