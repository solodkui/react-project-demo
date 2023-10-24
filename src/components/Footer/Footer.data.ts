// * Base
import { TIconType } from '../Icon/Icon.data';

export type TItem = {
  icon?: TIconType;
  title: string;
  path: string;
};

// * Links
export const LINKS: Readonly<TItem[]> = [
  {
    title: 'Викладайте на Camelot',
    path: '/teaching',
  },
  {
    title: 'Про нас',
    path: '/about',
  },
  {
    title: 'Блог',
    path: '/blog',
  },
  {
    title: 'Часто задаваємі питання',
    path: '/faq',
  },
  {
    title: 'Умови використання',
    path: '/terms',
  },
  {
    title: 'Підтримка',
    path: '/support',
  },
  {
    title: 'Політика конфіндеційності',
    path: '/privacy',
  },
  {
    title: 'Карта сайта',
    path: '/sitemap',
  },
  {
    title: 'Посилання',
    path: '/links',
  },
];

// * Social
export const SOCIAL: Readonly<TItem[]> = [
  {
    title: 'Telegram',
    path: '#',
    icon: 'telegram',
  },
  {
    title: 'Instagram',
    path: '#',
    icon: 'instagram',
  },
  {
    title: 'YouTube',
    path: '#',
    icon: 'youtube',
  },
  {
    title: 'WhatsApp',
    path: '#',
    icon: 'whatsapp',
  },
];

export type TList = typeof LINKS | typeof SOCIAL;