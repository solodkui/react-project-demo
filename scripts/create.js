// * Import modules
import { success } from './helpers/log.js';
import { fileURLToPath } from 'url';
import readline from 'readline';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

// * Get current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// * Create readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// * Create component
const createComponent = (componentName) => {
  const componentFolder = path.join(__dirname, '../src/components', componentName);

  // Creating a component folder
  fs.mkdirSync(componentFolder);

  // Creating an tsx file
  fs.writeFileSync(
    path.join(componentFolder, `${componentName}.tsx`),
    `// * Styles
import styles from './${componentName}.module.css';

function ${componentName}() {
  return (
    <div className={styles.${componentName[0].toLowerCase() + componentName.slice(1)}}>
      <h1>${componentName}</h1>
    </div>
  );
}

export default ${componentName};
`
  );

  // Creating a css file
  fs.writeFileSync(path.join(componentFolder, `${componentName}.module.css`), '');

  success(`The ${componentName} component was created successfully`);
};

// * Requesting a component name in the terminal
rl.question('Enter the name of the component: ', (componentName) => {
  createComponent(componentName);
  rl.close();
});
