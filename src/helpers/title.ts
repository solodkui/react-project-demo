// * Base
import BASE from './base';

const changeTitle = (title: string) => {
  document.title = `${BASE.projectName}: ${title}`;
};

export default changeTitle;
