// * Styles
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

export type TBreadcrumbsItem = {
  title: string;
  path: string;
};

function Breadcrumbs({ list }: { list: TBreadcrumbsItem[] }) {
  return (
    <ul className={styles.breadcrumbs}>
      {list.map(({ title, path }, index) => (
        <li key={`breadcrumbs item - ${title}`}>
          {index !== list.length - 1 ? (
            <>
              <Link to={path} className={styles.link} title={title}>
                {title}
              </Link>
              <span className={styles.line}>/</span>
            </>
          ) : (
            <span className={styles.title}>{title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;
