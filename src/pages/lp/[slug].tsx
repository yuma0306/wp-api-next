/**
 * React Next
 */
import Head from 'next/head';
/**
 * Constants
 */
import { host, ogpDefault } from '@/constants/wp';
/**
 * Types
 */
import type { PostType } from '@/types/Post';
import type { MetaType } from '@/types/Meta';
/**
 * Component
 */
import Faq from '@/components/Faq/Faq';
import Footer from '@/components/Footer/Footer';
import Fv from '@/components/Fv/Fv';
import HeadingLv1 from '@/components/HeadingLv1/HeadingLv1';
import HeadingLv2 from '@/components/HeadingLv2/HeadingLv2';
import Inner from '@/components/Inner/Inner';
import List from '@/components/List/List';
import WpBtn from '@/components/WpBtn/WpBtn';
import WpImg from '@/components/WpImg/WpImg';
import WpSection from '@/components/WpSection/WpSection';
import Wrapper from '@/components/Wrapper/Wrapper';
/**
 * Functions
 */
import { getTemplatePaths } from '@/functions/getTemplatePaths';
import { getTemplateProps } from '@/functions/getTemplateProps';
import { getRobotsTag } from '@/functions/getRobotsTag';
/**
 * Async
 */
// ページのパス一覧を取得
export const getStaticPaths = getTemplatePaths('page-lp.php');
// パス一覧から現在のURLに一致するpostを取得
export const getStaticProps = getTemplateProps('page-lp.php');

/**
 * Export default
 */
export default function Article({ post, slug }: { post: PostType, slug: MetaType['slug'] }) {
  console.log(post);
  const robotsTag = getRobotsTag({ noindex: post.acf.noindex_field, nofollow: post.acf.nofollow_field });
  const canonicalUrl = post.acf.canonical_field || `${host}/lp/${slug}/`;
  const ogUrl = post.acf.og_url_field || `${host}/lp/${slug}/`;
  const ogImg = post.acf.og_image_field || ogpDefault;
  return (
    <>
      <Head>
        <title>{post.acf.meta_title_field}</title>
        <meta name="description" content={post.acf.meta_desc_field} />
        <meta name="robots" content={robotsTag} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.acf.meta_title_field} />
        <meta property="og:description" content={post.acf.meta_desc_field} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:site_name" content={post.acf.meta_title_field} />
        <meta property="og:image" content={ogImg} />
      </Head>
      <Wrapper>
        {post.acf.lp_fv && (
          <Fv>
            <HeadingLv1>{post.title.rendered}</HeadingLv1>
            <WpImg imgID={post.acf.lp_fv} />
          </Fv>
        )}
        <WpSection>
          <Inner>
            <HeadingLv2>Point</HeadingLv2>
            {post.acf.lp_feature && <List list={post.acf.lp_feature} />}
            <HeadingLv2>FAQ</HeadingLv2>
            {post.acf.lp_faq && <Faq faq={post.acf.lp_faq} />}
            {post.acf.lp_cta && (
              <WpBtn
                target={post.acf.lp_cta.target}
                title={post.acf.lp_cta.title}
                url={post.acf.lp_cta.url}
              />
            )}
          </Inner>
        </WpSection>
        <Footer />
      </Wrapper>
    </>
  );
}
