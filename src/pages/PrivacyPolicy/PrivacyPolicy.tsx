// * Components
import Wrapper from '../../components/Wrapper/Wrapper';
import Card from '../../components/Card/Card';

// * Styles
import styles from './PrivacyPolicy.module.css';
import useTitle from '../../hooks/use-title.hook';

function PrivacyPolicy() {
  useTitle({ title: 'Політика конфіденційності' });

  return (
    <section className={styles.privacyPolicy}>
      <Wrapper className={[styles.wrapper]}>
        <Card>
          <h1 className={styles.title}>Політика конфіденційності</h1>
          <p>Вітаємо вас на сайті Camelot Academy! Для нас дуже важлива ваша конфіденційність.</p>
          <p>
            Ця Політика конфіденційності деталізує, як ми обробляємо вашу особисту інформацію, коли ви користуєтеся
            нашим веб-сайтом.
          </p>
          <h2 className={styles.subtitle}>1. Збір даних</h2>
          <p className={styles.text}>
            Коли ви відвідуєте наш сайт чи користуєтеся нашими послугами, ми можемо збирати такі особисті дані як ваше
            ім'я, електронну адресу, номер телефону, а також дані про ваше використання сайту.
          </p>
          <h2 className={styles.subtitle}>2. Використання даних</h2>
          <p className={styles.text}>Зібрана інформація використовується для:</p>
          <ul>
            <li className={styles.item}>- Покращення якості наших послугv</li>
            <li className={styles.item}>- Надання персоналізованої підтримки</li>
            <li className={styles.item}>- Надсилання вам оновлень, спеціальних пропозицій та інших новин</li>
          </ul>
          <h2 className={styles.subtitle}>3. Захист даних</h2>
          <p className={styles.text}>
            Ми вживаємо всіх можливих технічних та організаційних заходів для забезпечення безпеки вашої особистої
            інформації.
          </p>
          <h2 className={styles.subtitle}>4. Передача даних</h2>
          <p className={styles.text}>
            Ваші дані не будуть передаватися третім особам без вашої згоди, за винятком випадків, визначених українським
            законодавством.
          </p>
          <h2 className={styles.subtitle}>4. Зміни в політиці</h2>
          <p className={styles.text}>
            Camelot Academy має право оновлювати цю Політику конфіденційності. Усі зміни будуть опубліковані на цій
            сторінці.
          </p>
          <h2 className={styles.subtitle}>5. Звернення та запитання</h2>
          <p className={styles.text}>
            <span>
              Якщо у вас є питання або коментарі з приводу цієї Політики конфіденційності, будь ласка, зв'яжіться з нами
              за адресою
            </span>
            <a className={styles.email} href="mailto:solodkuiA@gmail.com" target="_blank" title="solodkuiA@gmail.com">
              solodkuiA@gmail.com
            </a>
          </p>
        </Card>
      </Wrapper>
    </section>
  );
}

export default PrivacyPolicy;
