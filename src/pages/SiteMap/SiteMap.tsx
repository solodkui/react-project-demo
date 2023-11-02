// * Base
import useTitle from '../../hooks/use-title.hook';
import { BREADCRUMBS_LIST } from './SiteMap.data';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './SiteMap.module.css';

function SiteMap() {
  useTitle({ title: 'Карта сайту' });

  return (
    <section className={styles.siteMap}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1 className={styles.title}>Карта сайту</h1>
      </Wrapper>
    </section>
  );
}

export default SiteMap;
