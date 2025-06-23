import React from 'react';
import {Button} from "./ui/button/Button";
import {Checkbox} from "./ui/checkbox/Checkbox";
import s from './App.module.css'
import '../styles/global.css'
import {Select} from "./ui/select/Select";
import Switch from "./ui/switch/Switch";

export const App = () => {

    return (
        <div>
            <div className={s.app}>

                Hello world
            </div>
            <div className={s.buttonContainer}>
                {/*<Button variant={'text'} size={'small'}>text small</Button>*/}
                {/*<Button variant={'text'} size={'medium'}>text medium</Button>*/}
                {/*<Button variant={'text'} size={'large'}>text large</Button>*/}
                {/*<Button variant={'contained'} size={'small'}>Contained small</Button>*/}
                {/*<Button variant={'contained'} size={'medium'}>Contained medium</Button>*/}
                {/*<Button variant={'contained'} size={'large'}>Contained large</Button>*/}
                {/*<Button variant={'outlined'} size={'small'}>outlined small</Button>*/}
                {/*<Button variant={'outlined'} size={'medium'}>outlined medium</Button>*/}
                <Button variant={'outlined'} size={'large'}>outlined large</Button>
                {/*<Checkbox label={'las'} disabled={true}/>*/}
                <Checkbox label={'las'} disabled={false}/>
                <Select options={['none', 'Ten', 'Twenty', 'Thirty']}
                label={'age'}/>
                <Switch/>
            </div>
        </div>
    );
};

