// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Error.module.css';

function Error() {
  useTitle({ title: '404' });

  return (
    <Wrapper className={[styles.wrapper]}>
      <h1 className={styles.title}>404: Сторінка не знайдена</h1>
    </Wrapper>
  );
}

export default Error;
