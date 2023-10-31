// * Base
import useOnlineStatus from './hooks/use-online-status.hook';
import { TRootState } from './store/store';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { memo } from 'react';

// * Components
import Notification from './components/Notification/Notification';
import Background from './components/Background/Background';
import Offline from './components/Offline/Offline';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// * Memoized
const MemoizedNotification = memo(() => {
  const notificationData = useSelector((s: TRootState) => s.notification);
  return <>{notificationData.text && <Notification type={notificationData.type} text={notificationData.text} />}</>;
});

// * Online
function Online() {
  return (
    <>
      <Header />
      <Outlet />
      <Background />
      <MemoizedNotification />
      <Footer />
    </>
  );
}

// * App
function App() {
  const isOnline = useOnlineStatus();
  return <>{isOnline ? <Online /> : <Offline />}</>;
}

// * Export
export default memo(App);
