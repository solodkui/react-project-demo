// * Base
import { LINKS, SOCIAL, TItem, TList } from './Footer.data';
import { Link } from 'react-router-dom';
import BASE from '../../helpers/base';
import Icon from '../Icon/Icon';
import cn from 'classnames';

// * Components
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper className={[styles.wrapper]}>
        <List list={LINKS} />
        <List list={SOCIAL} className={styles.social} />
        <Other />
      </Wrapper>
    </footer>
  );
}

function List({ list, className }: Readonly<{ list: TList; className?: string }>) {
  return (
    <ul className={cn([styles.list, className])} role='list'>
      {list.map((item) => (
        <Item key={`Footer item - ${item.title}`} {...item} />
      ))}
    </ul>
  );
}

function Item({ title, path, icon }: Readonly<TItem>) {
  return (
    <li role='listitem'>
      <Link to={path} className={styles.link}>
        {icon && <Icon icon={icon} />}
        <span>{title}</span>
      </Link>
    </li>
  );
}

function Other() {
  const dateNow = new Date();

  return (
    <div className={styles.other}>
      <span>&copy;</span>
      <time dateTime={dateNow.toLocaleTimeString()}>{dateNow.getFullYear()}</time>
      <span>{BASE.projectName}</span>
    </div>
  );
}

export default Footer;
