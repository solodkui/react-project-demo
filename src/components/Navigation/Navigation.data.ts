// * Types
export type TItem = {
  path: string;
  title: string;
  list?: TItem[];
};

// * Data
export const LIST: TItem[] = [
  {
    path: '/courses',
    title: 'Курси',
    list: [
      {
        path: '/courses/frontend',
        title: 'Frontend розробка',
      },
      {
        path: '/courses/english',
        title: 'Англійська мова',
      },
    ],
  },
  {
    path: '/about',
    title: 'Про нас',
  },
  {
    path: '/blog',
    title: 'Блог',
  },
  {
    path: '/contacts',
    title: 'Контакти',
  },
];
