import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import D1SportsPage from './D1SportsPage';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof D1SportsPage> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/D1SportsPage',
  component: D1SportsPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], // Wrapping the story inside the router
};

export default meta;
type Story = StoryObj<typeof D1SportsPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: () => <D1SportsPage />,
};

// Template.args = {

// };
