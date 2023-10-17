import { CardActiveWrapper } from ".";

export default {
  title: "Components/CardActiveWrapper",
  component: CardActiveWrapper,
  argTypes: {
    card: {
      options: ["active", "normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    card: "active",
    className: {},
    cardContentClassName: {},
    cardText: "Black",
    cardPhotoClassName: {},
    cardPhoto:
      "https://cdn.animaapp.com/projects/652e7ef9f98085b3df943d25/releases/652e7feab6383c0002cbbb1f/img/photo-5@2x.png",
    cardText1: "$145",
    cardText2: "Model 000",
  },
};
