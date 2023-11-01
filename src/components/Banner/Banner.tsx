// * Base
import LIST from './Banner.data';

// * Components
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

// * Styles
import styles from './Banner.module.css';

const TITLE_LIST = [
  'Навчання, яке перевершує усі очікування',
  'Досвід, який перетворює мрії у реальність',
  'Робіть перший крок до успіху вже сьогодні',
];

function Banner() {
  return (
    <section className={styles.banner}>
      <Wrapper className={[styles.wrapper]}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {TITLE_LIST.map((title) => (
              <div key={'Banner-title-' + title}>{title}</div>
            ))}
          </h1>
          <Button type="button" text="Отримати консультацію" title="Отримати консультацію" href="/consultation-form" />
        </div>
        <div className={styles.info}>
          {LIST.map(({ title, icon }) => (
            <div key={'Banner-info-' + title} className={styles.item} title={title}>
              <Icon icon={icon} />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

export default Banner;
