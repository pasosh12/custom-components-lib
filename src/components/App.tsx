import React, {useState} from 'react';
import {Button} from "./ui/button/Button";
import {Checkbox} from "./ui/checkbox/Checkbox";
import {Select} from "./ui/select/Select";
import {Switch} from "./ui/switch/Switch";
import '../styles/global.css'
import s from './App.module.css'
import {TextField} from "./ui/textField/TextField";
import {Modal} from "./ui/modal/Modal";

export const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isChildModalOpen, setIsChildModalOpen] = useState<boolean>(false);
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
                label={'Age'}/>
                <Switch/>
                <Switch checked/>
                <Switch disabled checked={true}/>
                <Switch disabled label={'required'} />
                <TextField/>
                <TextField disabled/>
                <TextField error />
                <TextField variant={'filled'} label={'filled'} />
                <TextField variant={'filled'} label={'filled'} disabled/>
                <TextField variant={'filled'} label={'filled'}  error />
                <TextField variant={'standard'} label={'standard'} />
                <TextField variant={'standard'} label={'standard'}  disabled/>
                <TextField variant={'standard'} label={'standard'} type={'number'}/>

                <TextField variant={'standard'} error />
                <Button variant={'text'} style={{fontWeight:500}} onClick={()=>setIsModalOpen(true)}>Open modal</Button>
                <Modal open={isModalOpen}
                       onClose={()=>setIsModalOpen(false)}>
                <h2>Modal window</h2>
                    <Button variant={'text'} style={{fontWeight:500}} onClick={() => setIsChildModalOpen(true)}>Open Child Modal</Button>
                </Modal>
                <Modal open={isChildModalOpen}
                       variant={'child'}
                       onClose={() => setIsChildModalOpen(false)}>
                    <h3>Child Modal</h3>
                    <p>Nested modal content</p>
                </Modal>
            </div>
        </div>
    );
};

