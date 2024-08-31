import type { Meta, StoryObj } from '@storybook/react';
import TextLink from '@/components/TextLink/TextLink';

const meta: Meta<typeof TextLink> = {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * テキストリンクのデフォルトスタイル
 */
export const Primary: Story = {
  args: {
    href: 'https://www.google.com',
    children: 'テキストリンク',
    blank: false,
  }
};

