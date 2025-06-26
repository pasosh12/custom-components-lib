import React from 'react';
import '../styles/global.css'
import s from './App.module.css'

export const App = () => {
    return (
        <div>
            <div className={s.app}>
                Hello world
            </div>
            <div className={s.buttonContainer}>
            </div>
        </div>
    );
};