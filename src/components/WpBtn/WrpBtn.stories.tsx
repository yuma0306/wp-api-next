import type { Meta, StoryObj } from '@storybook/react';
import WpBtn from '@/components/WpBtn/WpBtn';

const meta: Meta<typeof WpBtn> = {
  title: 'Components/WpBtn',
  component: WpBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    target: {
      control: 'select',
      options: ['_blank', '_self'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * ボタンのデフォルトスタイル
 */
export const Primary: Story = {
  args: {
    target: '_blank',
    title: 'リンクボタン',
    url: 'https://www.google.com',
  }
};

