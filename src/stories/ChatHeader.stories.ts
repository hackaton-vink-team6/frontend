import type { Meta, StoryObj } from '@storybook/react';

import TestComponent from '../components/test-component/test-component';

const meta = {
  title: 'TestComponent',
  component: TestComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {},
};
