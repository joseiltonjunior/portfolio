import { Section } from './index'
import { Meta, StoryObj } from '@storybook/react'
import { Box } from './style'
import lorem from '../../utils/lorem.json'

export default {
  title: 'Components/Section',
  component: Section,
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
  args: {
    title: 'Lorem Ipsum',
    children: lorem.textFake,
    show: false,
  },
  argTypes: {
    show: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

export const Default: StoryObj = {}
