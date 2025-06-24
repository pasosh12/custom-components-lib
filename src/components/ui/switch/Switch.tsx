import React, {ButtonHTMLAttributes} from 'react';
import clsx from "clsx";
import s from './Switch.module.css'

type SwitchType = {
    label?: string,
    checked?: boolean,
    size?: 'small' | 'large',
    required?: boolean,
    handleChange?: (checked: boolean) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Switch = ({
                    size = 'large',
                    label = '',
                    disabled = false,
                    checked = false,
                    ...props
                }:SwitchType) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    const handleToggle = () => {
        if (!disabled) {
            const newChecked = !isChecked;
            setIsChecked(newChecked);
            props.handleChange?.(newChecked);
        }
    };
    const className = clsx(s.switch, {
        [s.switch__large]: size === "large",
        [s.switch__small]: size === "small",
        [s.switch__checked]: isChecked,
        [s.switch__disabled]: disabled,
    });
    return (
        <button
            className={s.switch_wrapper}
            disabled={disabled}
            onClick={handleToggle}
            {...props}
        >
            <div className={className} id={props.id}>
        <span
            className={clsx(s.switch_slider,
                 isChecked && s.switch_slider__checked
            )}
        ></span>
            </div>
            <label className={s.switch_label} htmlFor={props.id}>
                {label}
            </label>
        </button>
    );
};