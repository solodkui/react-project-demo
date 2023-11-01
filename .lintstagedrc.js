import { ESLint } from 'eslint';

const eslint = new ESLint();

const removeIgnoredFiles = async (files) => {
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    }),
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(' ');
};

export default {
  'src/**/*.{ts,tsx,css}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`npx prettier --write ${filesToLint}`];
  },
  'src/**/*.{ts,tsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`npx eslint ${filesToLint}`];
  },
};
