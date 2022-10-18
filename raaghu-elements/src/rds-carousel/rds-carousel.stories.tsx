import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCarousel from "./rds-carousel";

export default {
  title: "Elements/Carousel",
  component: RdsCarousel,
  argTypes: {
    role:{
      options:[
        "advanced",
        "basic"
      ],
      control: { type: "select" },
    }
  },
} as ComponentMeta<typeof RdsCarousel>;

const Template: ComponentStory<typeof RdsCarousel> = (args) => (
  <RdsCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  Indicators: true,
  crossFade: true,
  controls: true,
  carouselItems: [

    {
      id:1,
      imgUrl:  "https://cdn.londonandpartners.com/visit/london-organisations/tower-bridge/86830-640x360-tower-bridge-640.jpg",
      name: "Sam Smith",
      roleName: "Product Manager",
      subTitle: "Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat condimentum veilt class patent taciti sociosqu and litara ad litora torquent per conubia nastra."
    },
    {
      id:2,
      imgUrl:  "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE",
      name: "king John",
      roleName: "Tech Lead",
      subTitle: "this is the caption section were u can add the caption for the image"
    },
    // {
    //   id:1,
    //   title: "first one",
    //   subtitle: "aaaaaaaaaaaaaaaaaa",
    //   imgUrl:
    //     "https://cdn.londonandpartners.com/visit/london-organisations/tower-bridge/86830-640x360-tower-bridge-640.jpg",
    // },
    // {
    //   id:2,
    //   title: "second one",
    //   subtitle: "aaaaaaaaaaaaaaaaaa",
    //   imgUrl:
    //     "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE",
    // },
    // {
    //   id:3,
    //   title: "third one",
    //   subtitle: "aaaaaaaaaaaaaaaaaa",
    //   imgUrl:
    //     "https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg",
    // },
    // {
    //   id:4,
    //   title: "4th one",
    //   subtitle: "aaaaaaaaaaaaaaaaaa",
    //   imgUrl:
    //     "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
    // },
  ],

};
