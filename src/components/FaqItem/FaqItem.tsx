/**
 * React Next
 */
import { useState, useRef, useEffect } from 'react';
/**
 * Types
 */
import { PostType } from '@/types/Post';
type Props = {
  question: PostType['acf']['lp_faq'][0]['lp_faq_question'];
  answer: PostType['acf']['lp_faq'][0]['lp_faq_answer'];
  index: number;
};
/**
 * Styles
 */
import styles from '@/components/FaqItem/FaqItem.module.scss';

export default function FaqItem({ question, answer, index }: Props) {
  // useState
  const [isActive, setIsActive] = useState<boolean>(false);
  // useRef
  const refAnswer = useRef<HTMLDListElement>(null);
  // useEffect
  useEffect(() => {
    index === 0 && setIsActive(true);
  }, []);
  // handleAcc
  const handleAcc = () => {
    setIsActive(!isActive);
  };
  // return
  return (
    <dl
      className={`${styles.faqItem} ${isActive ? styles['faqItem--isActive'] : ''}`}
      onClick={handleAcc}
    >
      <dt className={styles.faqItem__question}>
        {question}
        <span className={styles.faqItem__icon}></span>
      </dt>
      <dd
        className={styles.faqItem__answer}
        ref={refAnswer}
        style={{
          height: isActive && refAnswer.current ? `${refAnswer.current.scrollHeight}px` : '0px',
        }}
      >
        {answer}
      </dd>
    </dl>
  );
}
