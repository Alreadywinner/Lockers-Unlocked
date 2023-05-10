import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Card from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof Card> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], // Wrapping the story inside the router
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: (args) => <Card {...args} />,
};

Template.args = {
  imgProps: {
    src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    img_alt: 'temporary',
    width: '100%',
    className: 'rounded-t-lg',
    // height: 100,
  },
  //   text: 'Show 655 Homes',
  //   type: 'Card',
  //   onClick: () => {
  //     // do nothing now then pass e: React.MouseEvent<HTMLElement>
  //   },
};
