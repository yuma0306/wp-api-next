import type { Meta, StoryObj } from '@storybook/react';
import Faq from '@/components/Faq/Faq';

/**
 * Types
 */
import type { PostType } from '@/types/Post';

const meta: Meta<typeof Faq> = {
  title: 'Components/Faq',
  component: Faq,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    "lp_faq_question": "質問１質問１質問１質問１質問１質問１質問１質問１",
    "lp_faq_answer": "回答１回答１回答１回答１回答１回答１回答１回答１回答１",
    "index": 0
  },
  {
    "lp_faq_question": "質問２質問２質問２質問２質問２質問２質問２質問２",
    "lp_faq_answer": "回答２回答２回答２回答２回答２回答２回答２回答２回答２",
    "index": 1
  }
]

/**
 * FAQのデフォルトスタイル
 */
export const Primary: Story = {
  args: {
    faq: sampleData as PostType['acf']['lp_faq']
  },
};
