// * Base
import { LIST, TItem } from './Navigation.data';
import { Link } from 'react-router-dom';
import { memo } from 'react';

// * Styles
import styles from './Navigation.module.css';

const Navigation = memo(function () {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {LIST.map(({ path, title, list }, index) => (
          <li key={index} className={styles.item}>
            <Link to={path} className={styles.link} title={title}>
              {title}
            </Link>
            {list && <Sublist list={list} />}
          </li>
        ))}
      </ul>
    </nav>
  );
});

const Sublist = memo(function ({ list }: { list: TItem[] }) {
  return (
    <ul className={styles.sublist}>
      {list.map(({ path, title }, index) => (
        <li key={index} className={styles.subitem}>
          <Link to={path} className={styles.sublink} title={title}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default Navigation;
