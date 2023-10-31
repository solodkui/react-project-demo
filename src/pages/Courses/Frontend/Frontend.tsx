// * Components
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Wrapper from '../../../components/Wrapper/Wrapper';
import { BREADCRUMBS_LIST } from './Frontend.data';

// * Styles
import styles from './Frontend.module.css';

function Frontend() {
  return (
    <div className={styles.frontend}>
      <Wrapper>
        <Breadcrumbs list={BREADCRUMBS_LIST} />
        <h1>Frontend розробка</h1>
      </Wrapper>
    </div>
  );
}

export default Frontend;
