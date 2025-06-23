import s from './Select.module.css'
import React, {ChangeEvent, useState} from "react";

type SelectProps = {
    options: string[]
    label?: string
    selectHandler?: (value: string) => void
} & React.HTMLAttributes<HTMLSelectElement>;

export const Select = ({options, label, selectHandler, ...rest}: SelectProps) => {
    const [selected, setSelected] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        setSelected(value)
        selectHandler?.(value)
    }
    return (
        <>
            <div className={s.selectWrapper}>
                {label && <label className={s.floatingLabel}>
                    {label}
                </label>}
                <select defaultValue='' className={s.styledSelect} value={selected}
                        onChange={onChangeHandler}
                        {...rest}>
                    {options.map((o: string, index: number) => {
                        return (
                            <option key={index} value={o}>{o}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )

};