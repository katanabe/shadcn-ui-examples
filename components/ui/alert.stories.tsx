import { RocketIcon } from "@radix-ui/react-icons"
import { Meta, StoryObj } from "@storybook/react"

import { Alert, AlertDescription, AlertTitle } from "./alert"

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => {
    return (
      <Alert variant="default">
        <RocketIcon className="w-4 h-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    )
  },
}

export const Destractive: Story = {
  render: () => {
    return (
      <Alert variant="destructive">
        <RocketIcon className="w-4 h-4" />
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    )
  },
}
