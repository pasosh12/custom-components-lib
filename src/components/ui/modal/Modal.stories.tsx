import {Meta, StoryObj} from '@storybook/react'
import {Modal} from './Modal'
import React, {useState} from "react";
import {Button} from "../button/Button";

const meta = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        open: {control: "boolean"},
        variant: {control: 'select'}
    },
} satisfies Meta<typeof Modal>
export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        open: true,
        onClose: () => {
        }
    },
    render: () => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        return (
            <div>
                <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
                <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h2>Default Modal</h2>
                    <p> Simple modal.</p>
                </Modal>
            </div>
        );
    },
}

export const WithChildrenModal: Story = {
    args: {
        open: true,
        onClose: () => {
        }
    },

    render: () => {
        const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
        const [isChildModalOpen, setIsChildModalOpen] = useState<boolean>(false);

        return (
            <>
                <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
                <Modal open={isModalOpen}
                       onClose={() => setIsModalOpen(false)
                       }>
                    <h2>Modal window</h2>
                    <Button variant={'text'} style={{fontWeight: 500}} onClick={() => setIsChildModalOpen(true)}>Open
                        Child Modal</Button>
                </Modal>
                <Modal open={isChildModalOpen}
                       variant={'child'}
                       onClose={() => setIsChildModalOpen(false)}>
                    <h3>Child Modal</h3>
                    <p>Nested modal content</p>
                </Modal>
            </>
        );
    },
}


