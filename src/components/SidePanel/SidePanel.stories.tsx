import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SidePanel from './index';

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const meta: Meta<typeof SidePanel> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/SidePanel',
  component: SidePanel,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], // Wrapping the story inside the router
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Template: Story = {
  render: (args) => <SidePanel {...args} />,
};

Template.args = {
  sidePanelItems: [
    {
      name: 'Live Items',
      key: 1,
    },
    {
      name: 'Sold Items',
      key: 2,
    },
    {
      name: 'Personal Info',
      key: 3,
    },
  ],
};
