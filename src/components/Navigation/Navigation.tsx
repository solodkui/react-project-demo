// * Base
import { Link } from 'react-router-dom';

// * Styles
import styles from './Navigation.module.css';

const LIST = [
  {
    path: '/courses',
    title: 'Курси',
  },
  {
    path: '/about',
    title: 'Про нас',
  },
] as const;

function Navigation() {
  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ path, title }) => (
          <li key={'navigation-' + path}>
            <Link to={path} className='link' title={title}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
