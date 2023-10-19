// * Base
import useTitle from '../../hooks/use-title.hook';

// * Components
import Banner from '../../components/Banner/Banner';

// * Styles
import styles from './Home.module.css';
import Faq from '../../components/Faq/Faq';

function Home() {
  useTitle({ title: 'Головна' });

  return (
    <div className={styles.home}>
      <Banner />
      <Faq />
    </div>
  );
}

export default Home;
