/**
 * Types
 */
import { PostType } from '@/types/Post';
/**
 * Styles
 */
import styles from '@/components/List02/List02.module.scss';
/**
 * Components
 */
import TextLink from '@/components/TextLink/TextLink'
/**
 * Constans
 */
import { host } from '@/constants/wp';

export default function List02({ list }: { list: PostType[] }) {
  return (
    <ul className={styles.list02}>
      {list.map(item => (
        <li className={styles.list02__item} key={item.id}>
          <span className={styles.list02__text}>{item.title.rendered}：</span>
          <TextLink href={`/lp${item.link.replace(host, '')}`}>
            {`/lp${item.link.replace(host, '')}`}
          </TextLink>
        </li>
      ))}
    </ul>
  );
}
