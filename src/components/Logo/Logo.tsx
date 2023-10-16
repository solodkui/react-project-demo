// * Base
import { Link } from 'react-router-dom';
import BASE from '../../helpers/base';

// * SVG
import GraduationCap from '../svg/GraduationCap/GraduationCap.svg';

// * Styles
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to={'/'} className={styles.wrapper} title={BASE.projectName}>
      <GraduationCap className={styles.icon} />
      <div className={styles.content}>
        <span className={styles.title}>Camelot</span>
        <span className={styles.subtitle}>Знання - ключ до влади, гармонії та невичерпних можливостей</span>
      </div>
    </Link>
  );
}

export default Logo;
