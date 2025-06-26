import React, {ReactNode} from 'react';
import s from './Modal.module.css'

type ModalTypes = {
    children?: ReactNode
    onClose: () => void
    open: boolean
    variant?: 'base' | 'child'
}

export const Modal = ({
                          children, open, onClose,
                          variant = 'base'
                      }: ModalTypes) => {
    if (!open) return null
    return (
        <div className={s.overlay} data-testid="overlay" onClick={onClose}>
            <div
                className={`${s.modal} ${variant==='child'? s.modalChild : ''}` }
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>

    );
};

