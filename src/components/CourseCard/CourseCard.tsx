// * Base
import { memo } from 'react';

// * Styles
import styles from './CourseCard.module.css';
import Button from '../Button/Button';

// * Types
type TProps = {
  description: string;
  title: string;
  path: string;
};

function CourseCard({ title, path, description }: TProps) {
  return (
    <div className={styles.course}>
      <div className={styles.title}>
        <b>{title}</b>
      </div>
      <div className={styles.description}>{description}</div>
      <Button type='button' href={path} text='Детальніше' title='Детальніше' className={[styles.button]} />
    </div>
  );
}

export default memo(CourseCard);
