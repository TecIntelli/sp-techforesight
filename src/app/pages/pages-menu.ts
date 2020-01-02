import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'TFE Charts',
    group: true,
  },
  {
    title: 'Use Case 1',
    icon: 'bar-chart-outline',
    children: [
      {
        title: 'test',
        link: '/pages/test',
      },
    ],
  },
  {
    title: 'Use Case 2',
    icon: 'bar-chart-outline',
    link: '',
  },
  {
    title: 'Use Case 3',
    icon: 'bar-chart-outline',
    link: '',
  },
];

