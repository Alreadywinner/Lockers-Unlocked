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
  render: () => <Carousel />,
};

Template.args = {};
