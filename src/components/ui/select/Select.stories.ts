import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
    title: 'Components/Select',
    component: Select,
} satisfies Meta<typeof Select>
export default meta

type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
        options: ['None','Ten','Twenty','Thirty'],
        label: 'Age',
    },
}



// variant: 'contained'| 'outline' | 'text',
