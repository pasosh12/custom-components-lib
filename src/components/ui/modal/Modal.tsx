import React, {ReactNode} from 'react';
import s from './Modal.module.css'

type ModalTypes = {
    children?: ReactNode
    onClose: () => void
    open: boolean
    variant?: 'base' | 'child'
} & React.HTMLAttributes<HTMLDivElement>

export const Modal = ({
                          children, open, onClose,
                          variant = 'base',
                          ...props
                      }: ModalTypes) => {
    if (!open) return null
    return (
        <div className={s.overlay}
             {...props}
             onClick={onClose}>
            <div
                className={`${s.modal} ${variant === 'child' ? s.modalChild : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>

    );
};

