import {Meta, StoryObj} from '@storybook/react'
import {Switch} from './Switch'

const meta = {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
        disabled: { control: 'boolean' },
        checked: { control: 'boolean' },
        label: { control: 'text' },
    },
} satisfies Meta<typeof Switch>
export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        label: 'Label',
    },
}
export const DefaultChecked: Story = {
    args: {
        checked: true,
        label: 'Label',
    },
}
export const  DisabledDefault: Story = {
    args: {
        disabled: true,
        children: 'Contained',
        label: 'Disabled',
    },
}
export const DisabledChecked: Story = {
    args: {
        disabled: true,
        checked: true,
        label: 'Disabled',
    },
}

// variant: 'contained'| 'outline' | 'text',
