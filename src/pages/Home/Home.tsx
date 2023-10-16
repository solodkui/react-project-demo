// * BaseF
import changeTitle from '../../helpers/title';
import { useEffect } from 'react';

// * Styles
import styles from './Home.module.css';

function Home() {
  useEffect(() => {
    changeTitle('Home');
  }, []);

  return (
    <div className={styles.home}>
      <div className='wrapper'>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
