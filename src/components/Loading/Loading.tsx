// * Components
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './Loading.module.css';

function Loading() {
  return (
    <Wrapper className={[styles.wrapper]}>
      <p>Загрузка...</p>
    </Wrapper>
  );
}

export default Loading;
