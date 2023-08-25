import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import BidsTable from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof BidsTable> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/BidsTable',
  component: BidsTable,
};

export default meta;
type Story = StoryObj<typeof BidsTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: (args) => <BidsTable {...args} />,
};

Template.args = {
  bidsData: [
    {
      bid: '30$',
      email: 'test@gmail.com',
      id: '123',
      name: 'Lockers Unlocked',
    },
  ],
};
