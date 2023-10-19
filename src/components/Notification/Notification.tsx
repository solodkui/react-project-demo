// * Base
import { ENotificationType } from '../../store/notification.slice';
import cn from 'classnames';

// * Styles
import styles from './Notification.module.css';

function Notification({ text, onClick, type }: { text: string; type: ENotificationType; onClick?: () => void }) {
  return (
    <div className={cn([styles.notification, styles[type]])} onClick={() => (onClick ? onClick() : null)}>
      <span>{text}</span>
    </div>
  );
}

export default Notification;
