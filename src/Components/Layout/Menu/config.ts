import { MenuSectionProps } from './types';
const MenuConfiguration: MenuSectionProps[] = [
  {
    title: 'Titles',
    icon: '🕮',
    items: [
      { text: 'Advanced Search', link: '/titles' },
      { text: 'Recently Added', link: '/titles/recent' },
      { text: 'Latest Update', link: '/titles/latest' },
      { text: 'Random', link: '/title/random' },
    ],
  },
  {
    title: 'Library',
    icon: '📚',
    items: [
      { text: 'Shelf', link: '/my/shelf' },
      { text: 'Collections', link: '/my/collections' },
      { text: "What's New", link: '/my/feed' },
      { text: 'History', link: '/my/history' },
    ],
  },
  {
    title: 'Profile',
    icon: '👤',
    items: [
      { text: 'Settings', link: '/profile/settings' },
      { text: 'Logout', link: '/logout' },
    ],
  },
  {
    title: 'Help',
    icon: '❓',
    items: [
      { text: 'FAQ', link: '/help/faq' },
      { text: 'Contact', link: '/help/contact' },
    ],
  },
];

export default MenuConfiguration;
