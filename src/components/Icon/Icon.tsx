// * Basef
import cn from 'classnames';

// * Styles
import styles from './Icon.module.css';

// * Data
import ICONS, { TIconType } from './Icon.data';

function Icon({ className, icon }: { className?: string; icon: TIconType }) {
  return (
    <svg className={cn([styles.icon, className])} viewBox="0 0 32 32">
      {ICONS[icon]}
    </svg>
  );
}

export default Icon;
