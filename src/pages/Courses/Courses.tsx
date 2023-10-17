// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Courses.module.css';

function Courses() {
  return (
    <div className={styles.courses}>
      <Wrapper className={[styles.wrapper]}>
        <h1 className={styles.title}>Курси</h1>
      </Wrapper>
    </div>
  );
}

export default Courses;