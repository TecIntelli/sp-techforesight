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
    children: [
      {
        title: 'd3pie',
        link: '/pages/d3pie',
      },
      {
        title: 'heatmap',
        link: '/pages/heatmap',
      },
    ],
  },
  {
    title: 'Use Case 3',
    icon: 'bar-chart-outline',
    link: '',
  },
];

