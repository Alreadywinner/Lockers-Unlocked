import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UserIcon } from '@Icon';
import Icon from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof Icon> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const IconWithBackground: Story = {
  render: (props) => <Icon {...props} />,
};

IconWithBackground.args = {
  children: <UserIcon fill="white" width={25} height={25} />,
  IconDivStyle: 'bg-red rounded-full w-fit px-4 py-4',
};
