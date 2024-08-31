/**
 * Next
 */
import Link from 'next/link';
/**
 * style
 */
import styles from './WpBtn.module.scss';
/**
 * Types
 */
import { PostType } from '@/types/Post';

interface Props {
  target: PostType['acf']['lp_cta']['target'];
  title: PostType['acf']['lp_cta']['title'];
  url: PostType['acf']['lp_cta']['url'];
}

export default function WpBtn({ target, title, url }: Props) {
  return (
    <>
      <Link className={styles.wpBtn} href={url} {...(target === '_blank' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        <span className={styles.wpBtn__text}>{title}</span>
      </Link>
    </>
  );
}
