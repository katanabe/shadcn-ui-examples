import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Default",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Icon: Story = {
  args: {
    size: "icon",
    variant: "ghost",
    children: <EnvelopeOpenIcon className="w-4 h-4" />,
  },
}
