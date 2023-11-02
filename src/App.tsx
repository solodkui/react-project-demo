// * Base
import useOnlineStatus from './hooks/use-online-status.hook';
import { Provider, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { memo } from 'react';

// * Store
import store, { TRootState } from './store/store';

// * Components
import Notification from './components/Notification/Notification';
import Background from './components/Background/Background';
import Offline from './components/Offline/Offline';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// * Online
function Online() {
  const notificationData = useSelector((s: TRootState) => s.notification);

  return (
    <>
      <Header />
      <Outlet />
      <Background />
      {notificationData.text && <Notification {...notificationData} />}
      <Footer />
    </>
  );
}

// * App
function App() {
  const isOnline = useOnlineStatus();

  return <Provider store={store}>{isOnline ? <Online /> : <Offline />}</Provider>;
}

// * Export
export default memo(App);
