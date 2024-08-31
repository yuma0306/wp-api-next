import { GetStaticProps } from 'next';
import type { PostType } from '@/types/Post';

/**
 * Constans
 */
import { host } from '@/constants/wp';

// 高階関数（関数を返す関数）
// 最初のアロー関数は、templateを引数として受け取り、「GetStaticProps型」の関数を返す
// 返された関数は、GetStaticPropsの仕様に従って非同期関数として定義
export const getTemplateProps = (template: string): GetStaticProps => async ({ params }) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // SSL証明書の検証を無効化
  const res = await fetch(`${host}/wp-json/wp/v2/pages/?slug=${params?.slug}`);
  // postsはPostType型のオブジェクトが複数含まれる配列
  const posts: PostType[] = await res.json();
  const post = posts.filter(item => item.template === template)[0];
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post, // postをpropsとして渡す
      slug: params?.slug,
    },
  };
};
