import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Carousel from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof Carousel> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Carousel',
  component: Carousel,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], // Wrapping the story inside the router
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: (args) => <Carousel {...args} />,
};

Template.args = {
  slides: [
    {
      src: 'https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      key: 1,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/Screen_Shot_2022-05-19_at_8.11.14_AM_1944x.png?v=1652962312',
      key: 2,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/exp_1944x.png?v=1628726052',
      key: 3,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/Website_3_5e3e742a-0d1a-4f78-be90-fea8890f3d7a_1944x.jpg?v=1680872229',
      key: 4,
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0414/2111/1457/files/Website_5_1944x.png?v=1683254520',
      key: 5,
    },
  ],
};
