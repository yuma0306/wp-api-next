import type { Meta, StoryObj } from '@storybook/react';
import List from '@/components/List/List';

/**
 * Types
 */
import type { PostType } from '@/types/Post';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    "lp_feature_title": "リスト１",
    "lp_feature_desc": "リスト１テキストリスト１テキストリスト１テキストリスト１テキストリスト１テキスト",
    "lp_feature_img": 5250
  },
  {
    "lp_feature_title": "リスト２",
    "lp_feature_desc": "リスト２テキストリスト２テキストリスト２テキストリスト２テキストリスト２テキスト",
    "lp_feature_img": 5250
  }
]

/**
 * リストのデフォルトスタイル
 */
export const Primary: Story = {
  args: {
    list: sampleData as PostType['acf']['lp_feature']
  }
};

