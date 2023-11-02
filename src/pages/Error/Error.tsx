// * Base
import useTitle from '../../hooks/use-title.hook';
import { memo } from 'react';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Error.module.css';

function Error() {
  const title = useTitle({ title: '404: Сторінка не знайдена' });

  return (
    <Wrapper className={[styles.wrapper]}>
      <h1 className={styles.title}>{title}</h1>
    </Wrapper>
  );
}

export default memo(Error);
