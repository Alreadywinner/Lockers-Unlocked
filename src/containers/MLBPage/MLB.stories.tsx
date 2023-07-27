import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LocalStorageDataProvider } from '@context';
import MLBPage from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof MLBPage> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/MLBPage',
  component: MLBPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <LocalStorageDataProvider>
          <Story />
        </LocalStorageDataProvider>
      </MemoryRouter>
    ),
  ], // Wrapping the story inside the router
};

export default meta;
type Story = StoryObj<typeof MLBPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: () => <MLBPage />,
};

// Template.args = {

// };
