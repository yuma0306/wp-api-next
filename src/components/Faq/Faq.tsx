/**
 * Types
 */
import type { PostType } from '@/types/Post';
/**
 * Components
 */
import FaqItem from '@/components/FaqItem/FaqItem';
/**
 * Styles
 */
import styles from '@/components/Faq/Faq.module.scss';

export default function Faq({ faq }: { faq: PostType['acf']['lp_faq'] }) {
  return (
    <div className={styles.faq}>
      {faq && faq.map((item, index) => {
        return (
          <FaqItem
            key={index}
            question={item.lp_faq_question}
            answer={item.lp_faq_answer}
            index={index}
          />
        );
      })}
    </div>
  );
}
