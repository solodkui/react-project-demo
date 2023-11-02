// * Base
import { BREADCRUMBS_LIST } from './ForTeaching.data';
import useTitle from '../../hooks/use-title.hook';
import BASE from '../../helpers/base';
import { memo } from 'react';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './ForTeaching.module.css';

function ForTeaching() {
  const title = useTitle({ title: `Викладайте на ${BASE.projectName}` });

  return (
    <section className={styles.forTeaching}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1>{title}</h1>
      </Wrapper>
    </section>
  );
}

export default memo(ForTeaching);
