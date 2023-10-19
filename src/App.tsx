// * Base
import useOnlineStatus from './hooks/use-online-status.hook';
import { Outlet } from 'react-router-dom';

// * Components
import Background from './components/Background/Background';
import Offline from './components/Offline/Offline';
import Header from './components/Header/Header';

function App() {
  const isOnline = useOnlineStatus();

  return (
    <>
      {isOnline ? (
        <>
          <Header />
          <Outlet />
          <Background />
          {/* TODO Footer */}
        </>
      ) : (
        <Offline />
      )}
    </>
  );
}

export default App;
