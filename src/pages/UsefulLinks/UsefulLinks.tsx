// * Base
import { BREADCRUMBS_LIST } from './UsefulLinks.data';
import useTitle from '../../hooks/use-title.hook';
import { memo } from 'react';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './UsefulLinks.module.css';

function UsefulLinks() {
  const title = useTitle({ title: 'Посилання' });

  return (
    <section className={styles.usefullinks}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1>{title}</h1>
      </Wrapper>
    </section>
  );
}

export default memo(UsefulLinks);
