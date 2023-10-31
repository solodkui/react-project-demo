// * Base
import { ENotificationType, hideNotification } from '../../store/notification.slice';
import { TAppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

// * Styles
import styles from './Notification.module.css';

function Notification({ text, type }: { text: string; type: ENotificationType }) {
  const dispatch = useDispatch<TAppDispatch>();

  return (
    <div className={cn([styles.notification, styles[type]])} onClick={() => dispatch(hideNotification())}>
      <span>{text}</span>
    </div>
  );
}

export default Notification;
