import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: () => (
    <Input
      placeHolder="Search ..."
      className="py-2 px-2.5 border border-black border-solid border-1"
    />
  ),
};

Template.args = {
  type: 'Input',
  //   onClick: () => {
  //     // do nothing now then pass e: React.MouseEvent<HTMLElement>
  //   },
};
