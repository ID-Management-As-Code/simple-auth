import React, { PropsWithChildren } from 'react';

type Properties = PropsWithChildren<{
    className?: string;
    full?: boolean;
    type?: 'button' | 'submit' | 'reset';
}>;

export const PrimaryButton = ({ children, className, full, type = 'button' }: Properties) => {
    let classes = 'flex justify-center py-2 px-4 border border-transparent '
        + 'rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 '
        + 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 '
        + 'focus:ring-indigo-500 '
        + className;

    if (full) classes += ' w-full';

    return (
        <button
            type={type}
            className={classes}
        >
            {children}
        </button>
    );
}
