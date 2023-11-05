// * Import modules
import editComponentTemplate from './template/component.template.js';
import { blueLog, redLog, success } from './helpers/log.js';
import createReadline from './helpers/readline.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

// * Create readline
const rl = createReadline(),
  COMPONENT_PATH = '../src/components',
  PAGES_PATH = '../src/pages';

// * Create component
const createComponent = (componentName, pageMode) => {
  const componentFolder = path.join(
    dirname(fileURLToPath(import.meta.url)),
    pageMode ? PAGES_PATH : COMPONENT_PATH,
    componentName,
  );

  // Creating a component folder
  fs.mkdirSync(componentFolder);

  // Creating an tsx file
  fs.writeFileSync(path.join(componentFolder, `${componentName}.tsx`), editComponentTemplate(componentName));

  // Creating a css file
  fs.writeFileSync(
    path.join(componentFolder, `${componentName}.module.css`),
    `.${componentName[0].toLowerCase() + componentName.slice(1)} {}`,
  );

  // Show success message
  success(`The ${componentName} component was created successfully`);
};

// * Requesting a component name in the terminal
rl.question(blueLog(' Enter the name of the component: '), (componentName) => {
  rl.question(
    blueLog(" It's page?(") +
      redLog('y') +
      blueLog('/') +
      redLog('n') +
      blueLog(', default ') +
      redLog('n') +
      blueLog('): '),
    (pageMode) => {
      createComponent(componentName, pageMode.toLocaleLowerCase() === 'y');
      rl.close();
    },
  );
});
