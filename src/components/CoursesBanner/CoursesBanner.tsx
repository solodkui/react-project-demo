// * Styles
import Button from '../Button/Button';
import styles from './CoursesBanner.module.css';

function CoursesBanner() {
  return (
    <div className={styles.coursesBanner}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Курси</h1>
        <img className={styles.image} src='public/courses-banner.jpg' alt='Banner' />
        <Button
          color='white'
          type='button'
          href='/consultation-form'
          className={[styles.button]}
          text='Отримати консультацію'
          title='Отримати консультацію'
        />
      </div>
    </div>
  );
}

export default CoursesBanner;
