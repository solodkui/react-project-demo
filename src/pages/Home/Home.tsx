// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import FaqContent from '../../components/FaqContent/FaqContent';
import Banner from '../../components/Banner/Banner';

// * Styles
import styles from './Home.module.css';
import { memo } from 'react';

function Home() {
  useTitle({ title: 'Головна' });

  return (
    <div className={styles.home}>
      <Banner />
      <FaqContent />
    </div>
  );
}

export default memo(Home);
