// * Base
import { BREADCRUMBS_LIST } from './TermsOfUse.data';
import useTitle from '../../hooks/use-title.hook';
import { memo } from 'react';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './TermsOfUse.module.css';

function TermsOfUse() {
  const title = useTitle({ title: 'Умови використання' });

  return (
    <section className={styles.termsOfUse}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1 className={styles.title}>{title}</h1>
      </Wrapper>
    </section>
  );
}

export default memo(TermsOfUse);
