import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: () => (
    <Button
      text="SHOP NOW"
      className="rounded-md text-white px-8 py-2 bg-red uppercase font-gilroy font-bold"
    />
  ),
};

Template.args = {
  text: 'Show 655 Homes',
  //   onClick: () => {
  //     // do nothing now then pass e: React.MouseEvent<HTMLElement>
  //   },
};
