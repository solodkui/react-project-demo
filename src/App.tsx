// * Base
import { Outlet } from 'react-router-dom';

// * Components
import Background from './components/Background/Background';
import Header from './components/Header/Header';

function App() {
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
