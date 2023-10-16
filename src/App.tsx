// * Base
import { Outlet } from 'react-router-dom';

// * Components
import Header from './components/Header/Header';

// * Styles
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      {/* TODO Footer */}
    </>
  );
}

export default App;
