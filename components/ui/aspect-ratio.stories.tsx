import Image from "next/image"
import { Meta, StoryObj } from "@storybook/react"

import { AspectRatio } from "./aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => {
    return (
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
        />
      </AspectRatio>
    )
  },
}

export const Small: Story = {
  render: () => {
    return (
      <div className="w-64">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
          />
        </AspectRatio>
      </div>
    )
  },
}
