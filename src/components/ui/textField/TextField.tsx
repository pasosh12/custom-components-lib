import React, {InputHTMLAttributes, useId} from 'react';
import s from './TextField.module.css'
import clsx from "clsx";

type TextFieldType = {
    variant?: 'outlined' | 'filled' | 'standard'
    error?: boolean
    label?: string

} & Omit<InputHTMLAttributes<HTMLInputElement>,'placeholder'>

export const TextField = ({
                              variant = 'outlined',
                              label = 'Label',
                              className,
                              error = false,
                              ...props
                          }: TextFieldType) => {
    label === 'required' || 'Required' ? label + '*' : label
    const inputClassName = clsx(className, s.textfield_input, {
        [s.textfield__standard]: variant === "standard",
        [s.textfield__filled]: variant === "filled",
        [s.textfield__outlined]: variant === "outlined",
        [s.error]: error,
    });
    const generatedId=useId()
    const inputId= props.id ?? generatedId
    return (
        <div className={s.textfield_wrapper}>
            <div className={s.input_wrapper}>
                <input
                    className={inputClassName}
                    placeholder=' '
                    {...props}
                    id={inputId}
                    required={props.required}
                />
                <label className={s.textfield_label}
                 htmlFor={inputId}>
                    { label}
                </label>
            </div>
        </div>
    );
};


