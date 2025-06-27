import { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>
export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        options: ['None','Ten','Twenty','Thirty'],
        label: 'Age',
    },
}
export const Disabled: Story = {
    args: {
        options: ['None','Ten','Twenty','Thirty'],
        label: 'Age',
        disabled:true,
    },
}
export const Error: Story = {
    args: {
        options: ['None','Ten','Twenty','Thirty'],
        label: 'Age',
        errorText:'Error',
    },
}
export const WithHelpText: Story = {
    args: {
        options: ['None','Ten','Twenty','Thirty'],
        label: 'Age',
        helperText:'Helper Text',
    },
}
export const noLabel: Story = {
    args: {
        options: ['None','Ten','Twenty','Thirty'],
        label: '',
        helperText:'Helper Text',
    },
}


// variant: 'contained'| 'outline' | 'text',
