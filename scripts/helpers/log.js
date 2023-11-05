// * Import chalk module
import chalk from 'chalk';

// * Export success console
export const success = (text) => console.log(chalk.white.bgGreen.bold(` ${text} `));

// * Export error console
export const error = (text) => console.log(chalk.white.bgRed.bold(` ${text} `));

// * Export red console
export const redLog = chalk.red.bgBlack.bold;

// * Export blue console
export const blueLog = chalk.blue.bgBlack.bold;
