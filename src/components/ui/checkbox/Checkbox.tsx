import React, {ChangeEvent, ComponentProps, useState} from 'react'
import CheckIcon from '../../../assets/checkmark-outline.svg'
import clsx from "clsx";
import s from './Checkbox.module.css'

type CheckBoxProps = {
    variant?: 'default' | 'active' | 'hover' | 'focus' | 'disabled'
    label?: string,
    onClickHandler?: (checked: boolean) => void
} & ComponentProps<'input'>

export const Checkbox = ({
                             variant = 'default',
                             label,
                             className,
                             id,
                             disabled,
                             onClickHandler,
                             ...rest
                         }: CheckBoxProps) => {
    const [checked, setChecked] = useState<boolean>(true)
    const onCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.checked
        onClickHandler?.(value)
        setChecked(value)
    }

    return (
        <label className={s.checkboxWrapper}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onCheckHandler}
                className={clsx( s.checkboxInput, disabled && s.disabled)}
                disabled={disabled}
                {...rest}
            />
            <span className={s.customCheck}>
                {checked && <CheckIcon className={clsx(s.checkIcon, disabled && s.disabled)}/>}
            </span>
            {label && <span className={clsx(s.checkboxLabel, disabled && s.disabled)}>{label}</span>}
        </label>

    )
}
