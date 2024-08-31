/**
 * React Next
 */
import Link from 'next/link';
/**
 * Styles
 */
import styles from '@/components/TextLink/TextLink.module.scss';

type Props = {
  href: string,
  children: React.ReactNode,
  blank?: boolean,
}

export default function TextLink({ href, children, blank = false }: Props) {
  return (
    <Link className={styles.textLink} href={href} {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </Link>
  );
}
