import {Meta, StoryObj} from '@storybook/react'
import {Button} from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>


export const Outline: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined',
  },
}
export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text',
  },
}
export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Contained',
  },
}

// variant: 'contained'| 'outline' | 'text',
