import { NbMenuItem } from '@nebular/theme';

/*
Menüstruktur
*/

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
    icon: 'bar-chart-outline', // individuelles Icon, stammen aus https://akveo.github.io/eva-icons/#/?searchKey=bar&type=outline
    children: [
      {
        title: 'Datenübersicht',
        link: '/pages/TechnologydataApplication',
      },
      {
        title: 'Radar',
        link: '/pages/Radar',
      },
      {
        title: 'Heatmap',
        link: '/pages/Heatmap',
      },
    ],
  },
  {
    title: 'Use Case 2',
    icon: 'bar-chart-outline',
    children: [
      {
        title: 'Datenübersicht',
        link: '/pages/TechnologydataExpert',
      },
      {
        title: 'Grouped Bar Chart',
        link: '/pages/GroupedBarChart',
      },
      {
        title: 'Gauge Chart',
        link: '/pages/GaugeChart',
      },
    ],
  },
  {
    title: 'Use Case 3',
    icon: 'bar-chart-outline',
    children: [
      {
        title: 'Datenübersicht',
        link: '/pages/SponsorshipCatalogue',
      },
      {
        title: 'Manueller CSV Datenupload',
        link: '/pages/LoadCSV',
      },
      {
        title: 'Horizontal Bar Chart',
        link: '/pages/HorizontalBarChart',
      },
      {
        title: 'Bubble Chart',
        link: '/pages/BubbleChart',
      },
    ]
  },
];

