// * Base
import { LIST, TItem } from './Navigation.data';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import cn from 'classnames';

// * Styles
import styles from './Navigation.module.css';

function Navigation({ show, close }: { show: boolean; close: () => void }) {
  return (
    <nav className={cn([styles.navigation, show && styles.show])}>
      <ul className={styles.list}>
        {LIST.map(({ path, title, list }, index) => (
          <li key={index} className={styles.item}>
            <Link to={path} className={styles.link} title={title} onClick={close}>
              {title}
            </Link>
            {list && <Sublist close={close} list={list} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Sublist = memo(function ({ list, close }: { list: TItem[]; close: () => void }) {
  return (
    <ul className={styles.sublist}>
      {list.map(({ path, title }, index) => (
        <li key={index} className={styles.subitem}>
          <Link to={path} className={styles.sublink} title={title} onClick={close}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default memo(Navigation);
