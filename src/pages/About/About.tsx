'use client';
// * Base
import useTitle from '../../hooks/use-title.hook';
import { BREADCRUMBS_LIST } from './About.data';
import { memo } from 'react';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './About.module.css';

function About() {
  const title = useTitle({ title: 'Про нас' });

  return (
    <div className={styles.about}>
      <Wrapper className={[styles.wrapper]}>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1 className={styles.title}>{title}</h1>
      </Wrapper>
    </div>
  );
}

export default memo(About);
