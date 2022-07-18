/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";

interface Properties {
    title: string;
}

export const TextSeparator = ({ title }: Properties) => {
    return (
        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{title}</span>
            </div>
        </div>
    );
}
