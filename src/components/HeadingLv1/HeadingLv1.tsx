/**
 * Style
 */
import styles from '@/components/HeadingLv1/HeadingLv1.module.scss';

type Props = {
  children: React.ReactNode;
  addClass?: string;
}

export default function HeadingLv1({ children, addClass }: Props) {
  return (
    <>
      <h1 className={`${styles.headingLv1} ${addClass ? addClass : ''}`}>
        { children }
      </h1>
    </>
  );
}
