import React, { HTMLInputTypeAttribute } from 'react';

interface Properties {
    autoComplete?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
    label?: string | React.ReactElement;
    max?: string | number;
    maxLength?: number;
    min?: string | number;
    minLength?: number;
    name: string;
    placeHolder?: string;
    readOnly?: boolean;
    required?: boolean;
    type?: HTMLInputTypeAttribute;
    value?: string | number | readonly string[];
}

export const Input = ({
    autoComplete,
    className,
    disabled,
    id,
    label,
    max,
    maxLength,
    min,
    minLength,
    name,
    placeHolder,
    readOnly,
    required,
    type = 'text',
    value
}: Properties) => {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={id || name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <input
                autoComplete={autoComplete}
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                disabled={disabled}
                id={id || name}
                max={max}
                maxLength={maxLength}
                min={min}
                minLength={minLength}
                name={name}
                placeholder={placeHolder}
                readOnly={readOnly}
                required={required}
                type={type}
                value={value}
            />
        </div>
    );
}
