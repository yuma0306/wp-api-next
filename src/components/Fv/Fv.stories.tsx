import type { Meta, StoryObj } from '@storybook/react';
import Fv from '@/components/Fv/Fv';
import HeadingLv1 from '@/components/HeadingLv1/HeadingLv1';
import WpImg from '@/components/WpImg/WpImg';

const meta: Meta<typeof Fv> = {
  title: 'Components/Fv',
  component: Fv,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * FVのデフォルトスタイル
 */
export const Primary: Story = {
  args: {
    children: (
      <>
        <HeadingLv1>見出し1見出し1</HeadingLv1>
        <WpImg imgID={5250} />
      </>
    )
  }
};

