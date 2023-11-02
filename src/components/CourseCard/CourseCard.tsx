// * Base
import { memo } from 'react';

// * Styles
import styles from './CourseCard.module.css';
import Button from '../Button/Button';

// * Types
type TProps = {
  description: string;
  image: string;
  title: string;
  path: string;
};

function CourseCard({ title, path, description, image }: TProps) {
  return (
    <div className={styles.course}>
      <div className={styles.title}>
        <b>{title}</b>
      </div>
      <div className={styles.description}>{description}</div>
      <img loading="lazy" src={image} alt={image} className={styles.image} />
      <Button
        href={path}
        type="button"
        text="Детальніше"
        title={`Відкрити детальну сторінку: ${title}`}
        className={[styles.button]}
      />
    </div>
  );
}

export default memo(CourseCard);
