// * Base
import { BREADCRUMBS_LIST } from './Contacts.data';
import { memo } from 'react';

// * Components
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1 className={styles.title}>Контакти</h1>
      </Wrapper>
    </div>
  );
}

export default memo(Contacts);
