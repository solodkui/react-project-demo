// * Base
import { hideNotification } from './store/notification.slice';
import useOnlineStatus from './hooks/use-online-status.hook';
import { TAppDispatch, TRootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// * Components
import Notification from './components/Notification/Notification';
import Background from './components/Background/Background';
import Offline from './components/Offline/Offline';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const notificationData = useSelector((s: TRootState) => s.notification);
  const dispatch = useDispatch<TAppDispatch>();
  const isOnline = useOnlineStatus();

  return (
    <>
      {isOnline ? (
        <>
          <Header />
          <Outlet />
          <Background />
          {notificationData.text && (
            <Notification type={notificationData.type} text={notificationData.text} onClick={() => dispatch(hideNotification())} />
          )}
          <Footer />
        </>
      ) : (
        <Offline />
      )}
    </>
  );
}

export default App;
