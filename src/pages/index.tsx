/**
 * React Next
 */
import Head from 'next/head';
/**
 * Component
 */
import Footer from '@/components/Footer/Footer';
import HeadingLv2 from '@/components/HeadingLv2/HeadingLv2';
import Inner from '@/components/Inner/Inner';
import List02 from '@/components/List02/List02';
import WpSection from '@/components/WpSection/WpSection';
import Wrapper from '@/components/Wrapper/Wrapper';
/**
 * Types
 */
import type { PostType } from '@/types/Post';
/**
 * Constants
 */
import { host, ogpDefault } from '@/constants/wp';
const templateName = 'page-lp.php';

export const getStaticProps = async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // SSL証明書の検証を無効化
  const res = await fetch(`${host}/wp-json/wp/v2/pages/`);
  const posts: PostType[] = await res.json();
  const templates = posts.filter(item => item.template === templateName);
  if (!templates) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      templates,
    },
  };
};

/**
 * Export default
 */
export default function Index({ templates }: { templates: PostType[] }) {
  return (
    <>
      <Head>
        <title>LP一覧</title>
        <meta name="description" content="LPの一覧です。" />
        <meta name="robots" content="none" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${host}`} />
        <meta property="og:title" content="LP一覧" />
        <meta property="og:description" content="LPの一覧です。" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={`${host}`} />
        <meta property="og:site_name" content="LP一覧" />
        <meta property="og:image" content={ogpDefault} />
      </Head>
      <Wrapper>
        <WpSection>
          <Inner>
            <HeadingLv2>LP一覧</HeadingLv2>
            <List02 list={templates} />
          </Inner>
        </WpSection>
        <Footer />
      </Wrapper>
    </>
  );
}
