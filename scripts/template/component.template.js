const editComponentTemplate = (componentName) => `// * Base
import { memo } from 'react';

// * Styles
import styles from './${componentName}.module.css';

function ${componentName}() {
  return (
    <div className={styles.${componentName[0].toLowerCase() + componentName.slice(1)}}>
      <h1 className={styles.title}>${componentName}</h1>
    </div>
  );
}

export default memo(${componentName});
`;

export default editComponentTemplate;
