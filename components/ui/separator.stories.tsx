import type { Meta, StoryObj } from "@storybook/react"

import { Separator } from "./separator"

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Separator>

export const Primary: Story = {
  args: {
    className: "my-4",
  },
}

export const Vertical: Story = {
  args: {
    className: "h-[20px]",
    orientation: "vertical",
  },
}
