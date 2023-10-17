// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <Wrapper className={[styles.wrapper]}>
        <h1 className={styles.title}>Про нас</h1>
      </Wrapper>
    </div>
  );
}

export default About;
