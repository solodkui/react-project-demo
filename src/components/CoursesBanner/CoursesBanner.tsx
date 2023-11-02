// * Base
import DATA from './CourseBanner.data';

// * Components
import CourseCard from '../CourseCard/CourseCard';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';

// * Styles
import styles from './CoursesBanner.module.css';

function CoursesBanner() {
  return (
    <div className={styles.coursesBanner}>
      <Wrapper className={[styles.wrapper]}>
        <CourseCard {...DATA.frontend} />
        <Main />
        <CourseCard {...DATA.english} />
      </Wrapper>
    </div>
  );
}

function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Курси</h1>
      <img className={styles.image} src="/courses-banner.jpg" alt="Banner" />
      <Button
        color="white"
        type="button"
        href="/consultation-form"
        text="Отримати консультацію"
        title="Отримати консультацію"
      />
    </div>
  );
}

export default CoursesBanner;
