import {Meta, StoryObj} from '@storybook/react'
import {TextField} from './TextField'

const meta = {
    title: 'Components/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        disabled: {control: 'boolean'},
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'select' },
        },
        label: {control: 'text'},
    },
} satisfies Meta<typeof TextField>
export default meta

type Story = StoryObj<typeof meta>


export const Outlined: Story = {
    args: {
        variant:'outlined',
        label: 'Outlined',
    },
}
export const Filled: Story = {
    args: {
        variant:'filled',
        label: 'Filled',
    },
}
export const Standard: Story = {
    args: {
        variant:'standard',
        label: 'Standard',
    },
}
export const Disabled: Story = {
    args: {
        disabled: true,
        label:'Disabled',
    },
}
export const Error: Story = {
    args: {
        error: true,
        label:'Error',
    },
}


