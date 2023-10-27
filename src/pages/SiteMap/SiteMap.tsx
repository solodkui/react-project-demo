// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './SiteMap.module.css';

function SiteMap() {
  useTitle({ title: 'Карта сайту' });

  return (
    <section className={styles.siteMap}>
      <Wrapper>
        <h1>Карта сайту</h1>
      </Wrapper>
    </section>
  );
}

export default SiteMap;
