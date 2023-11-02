// * Import modules
import { success } from './helpers/log.js';
import { fileURLToPath } from 'url';
import readline from 'readline';
import { dirname } from 'path';
import chalk from 'chalk';
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
const createComponent = (componentName, pageMode) => {
  const componentFolder = path.join(__dirname, pageMode ? '../src/pages' : '../src/components', componentName);

  // Creating a component folder
  fs.mkdirSync(componentFolder);

  // Creating an tsx file
  fs.writeFileSync(
    path.join(componentFolder, `${componentName}.tsx`),
    `// * Base
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
`,
  );

  // Creating a css file
  fs.writeFileSync(path.join(componentFolder, `${componentName}.module.css`), '');

  success(`The ${componentName} component was created successfully`);
};

// * Requesting a component name in the terminal
rl.question(chalk.blue.bgBlack.bold(' Enter the name of the component: '), (componentName) => {
  rl.question(
    chalk.blue.bgBlack.bold(" It's page?(") +
      chalk.red.bgBlack.bold('y') +
      chalk.blue.bgBlack.bold('/') +
      chalk.red.bgBlack.bold('n') +
      chalk.blue.bgBlack.bold(', default ') +
      chalk.red.bgBlack.bold('n') +
      chalk.blue.bgBlack.bold('): '),
    (pageMode) => {
      createComponent(componentName, pageMode.toLocaleLowerCase() === 'y');
      rl.close();
    },
  );
});
