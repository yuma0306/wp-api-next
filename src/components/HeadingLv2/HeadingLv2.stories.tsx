import type { Meta, StoryObj } from '@storybook/react';
import HeadingLv2 from '@/components/HeadingLv2/HeadingLv2';

const meta: Meta<typeof HeadingLv2> = {
  title: 'Components/HeadingLv2',
  component: HeadingLv2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 見出しのデフォルトスタイル
 */
export const Primary: Story = {
  args: {
    children: '見出し',
    addClass: '',
  }
};

