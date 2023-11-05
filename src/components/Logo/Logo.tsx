// * Base
import { Link } from 'react-router-dom';
import BASE from '../../helpers/base';
import { memo } from 'react';
import cn from 'classnames';

// * Components
import Icon from '../Icon/Icon';

// * Styles
import styles from './Logo.module.css';

function Logo({ smallMode, onClick }: { smallMode?: boolean; onClick?: () => void }) {
  return (
    <Link to={'/'} className={cn([styles.logo, smallMode && styles.small])} title={BASE.projectName} onClick={onClick}>
      <Icon icon="graduationCap" className={styles.icon} />
      <div className={styles.content}>
        <span className={styles.title}>Camelot</span>
        <span className={styles.subtitle}>Знання - ключ до влади, гармонії та невичерпних можливостей</span>
      </div>
    </Link>
  );
}

export default memo(Logo);
