import s from './Select.module.css'
import React, {ChangeEvent, SelectHTMLAttributes, useState} from "react";
import clsx from "clsx";

type SelectProps = {
    options: string[]
    label?: string
    errorText?: string
    disabled?: boolean
    helperText?: string
    selectHandler?: (value: string) => void
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
                           options, label,
                           selectHandler, errorText = '',
                           disabled = false,
                           helperText='', ...props
                       }: SelectProps) => {

    const [selected, setSelected] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        setSelected(value)
        selectHandler?.(value)
    }
    const className = clsx(s.styled_select, {
        [s.select_disabled]: disabled,
        [s.select_error]: errorText,
    });
    return (
        <div className={s.select_wrapper}>
            <div className={s.select_inner}>
                <select className={className} value={selected}
                        onChange={onChangeHandler}
                        disabled={disabled}
                        {...props}>
                    <option value=""></option>
                    {options.map((o: string, index: number) => {
                        return (
                            <option key={index} value={o}>{o}</option>
                        )
                    })}
                </select>
                <label
                    className={` ${errorText && s.label_error} ${s.floating_label} ${selected ? s.label_active : ''}`}>
                    {label}
                </label>
            </div>
            {
                (errorText || helperText) && (
                    <span className={clsx(errorText ? s.error_text : s.helper_text)}>
                         {errorText || helperText}
                    </span>
                )
            }
        </div>
    )

};