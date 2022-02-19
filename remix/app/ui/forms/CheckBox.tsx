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

export const CheckBox = ({
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
        <div className={'flex items-center ' + className}>
            <input
                autoComplete={autoComplete}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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

            {label && (
                <label htmlFor={id || name} className="ml-2 block text-sm text-gray-900">
                    {label}
                </label>
            )}
        </div>
    );
}
