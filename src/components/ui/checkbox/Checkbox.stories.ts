import { Checkbox } from './Checkbox'
import React from 'react'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'active', 'hover', 'focus', 'disabled'],
      control: { type: 'select' },
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean', defaultValue: 'Check-box' },
    label: { control: 'text' },
  },
  args: {
    label: 'Check-box',
  },
}

export default meta


export const Active = {
  args: {
    variant: 'active',
    // children: 'Checkbox',
  },
}

export const Disabled = {
  args: {
    variant: 'disabled',
    // children: 'Checkbox',
    disabled: true,
  },
}
