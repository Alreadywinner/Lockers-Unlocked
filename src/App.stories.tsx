import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import App from './App';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof App> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'App',
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: () => <App />,
};

Template.args = {
  text: 'Show 655 Homes',
  style: 'primary',
  onClick: () => {
    // do nothing now then pass e: React.MouseEvent<HTMLElement>
  },
};
