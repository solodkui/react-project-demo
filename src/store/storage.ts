// * Base
import BASE from '../helpers/base';

// * Update state in storage
const updateStorage = <T>(state: T, key: Readonly<keyof T>, value: T[keyof T]): void => {
  try {
    const localStorageState = localStorage.getItem(BASE.projectName);

    if (localStorageState && typeof localStorageState === 'string') {
      state = JSON.parse(localStorageState);
    }
  } finally {
    state[key] = value;
    localStorage.setItem(BASE.projectName, JSON.stringify(state));
  }
};

export default updateStorage;
