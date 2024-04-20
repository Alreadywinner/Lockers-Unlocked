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
  title: 'Components/Card',
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
  item: {
    currentBid: '100',
    description: 'He wore this t-shirt in his farewell',
    fileSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    startingBid: '50',
    title: 'Lebron James',
    status: 'live',
    teamSelect: 'NBA',
    id: '',
    user_id: '',
    bids: [],
    user: {
      name: 'Uploader',
      fileSrc: '',
      email: 'test@gmail.com',
    },
    endDate: '2023-12-24',
    endTime: '2023-12-27T00:00:00.000Z',
  },
};
