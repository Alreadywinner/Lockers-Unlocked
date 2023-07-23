import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Loader from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof Loader> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Loader',
  component: Loader,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], // Wrapping the story inside the router
};

export default meta;
type Story = StoryObj<typeof Loader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: (args) => <Loader {...args} />,
};

Template.args = {
  color: '#ffc600',
};
