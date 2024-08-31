import type { Meta, StoryObj } from '@storybook/react';
import List02 from '@/components/List02/List02';

/**
 * Types
 */
import type { PostType } from '@/types/Post';

const meta: Meta<typeof List02> = {
  title: 'Components/List02',
  component: List02,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    "id": 138,
    "link": "/hoge/",
    "title": {
      "rendered": "リスト１リスト１リスト１"
    },
    "template": "page-lp.php",
  },
  {
    "id": 106,
    "link": "/hoge/",
    "title": {
      "rendered": "リスト２リスト２リスト２"
    },
    "template": "page-lp.php",
  }
]

/**
 * リスト02のデフォルトスタイル
 */
export const Primary: Story = {
  args: {
    list: sampleData as PostType[]
  },
};
