// * Base
import { BREADCRUMBS_LIST } from './English.data';

// * Components
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../../components/Wrapper/Wrapper';

// * Styles
import styles from './English.module.css';

function English() {
  return (
    <div className={styles.english}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1>English</h1>
      </Wrapper>
    </div>
  );
}

export default English;
