// * Base
import readline from 'readline';

const createReadline = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
};

export default createReadline;
