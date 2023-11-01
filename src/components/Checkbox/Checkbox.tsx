// * Base
import cn from 'classnames';

// * Components
import Icon from '../Icon/Icon';

// * Styles
import styles from './Checkbox.module.css';

function Checkbox({ value, onChange }: { value: boolean; onChange: () => void }) {
  return (
    <label className={styles.label}>
      <Icon icon="check" className={cn([styles.icon, value && styles.show])} />
      <input onChange={onChange} className={styles.checkbox} type="checkbox" />
    </label>
  );
}

export default Checkbox;
