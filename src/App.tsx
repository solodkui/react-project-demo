// * Base
import { Outlet } from 'react-router-dom';

// * Components
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import useOnlineStatus from './hooks/use-online-status';

function App() {
  useOnlineStatus();

  return (
    <>
      <Header />
      <Outlet />
      <Background />
      {/* TODO Footer */}
    </>
  );
}

export default App;
