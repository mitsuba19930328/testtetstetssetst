import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    button: {
      options: ["rounded", "primary", "disable", "text", "ghost"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    button: "rounded",
    className: {},
    divClassName: {},
    text: "Button",
  },
};
