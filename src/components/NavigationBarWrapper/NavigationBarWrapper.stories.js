import { NavigationBarWrapper } from ".";

export default {
  title: "Components/NavigationBarWrapper",
  component: NavigationBarWrapper,
  argTypes: {
    navigationBar: {
      options: ["navigation-bar-hover", "navigation-bar"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    navigationBar: "navigation-bar-hover",
    className: {},
  },
};
