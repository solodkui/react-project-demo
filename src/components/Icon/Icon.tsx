// * Basef
import cn from 'classnames';

// * Data
import ICONS, { TIconType } from './Icon.data';

function Icon({ className, icon }: { className?: string; icon: TIconType }) {
  return (
    <svg className={cn(['icon', className])} viewBox='0 0 32 32'>
      {ICONS[icon]}
    </svg>
  );
}

export default Icon;
