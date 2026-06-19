import type { IoniconName } from '@/utils';

export type LearnFilter = {
  key: string;
  label: string;
  count: string;
  icon: IoniconName | '';
};

export type IllustrationKey =
  | 'LearnPageIllustrate'
  | 'HomeIllustrate'
  | 'HomeIllustrate2'
  | 'OnboardingIllustrate';

export type LearnCard = {
  key: string;
  category: string;
  categoryLabel: string;
  title: string;
  lessons: number;
  minutes: number;
  bg: string;
  /** Ionicons name for the card's corner badge. */
  icon: IoniconName;
  illustration: IllustrationKey;
};

export const learnFilters: LearnFilter[] = [
  { key: 'all', label: 'All', count: '12', icon: '' },
  { key: 'letters', label: 'Letters', count: '03', icon: 'text' },
  { key: 'colors', label: 'Colors', count: '04', icon: 'color-palette-outline' },
  { key: 'numbers', label: 'Numbers', count: '03', icon: 'calculator-outline' },
  { key: 'shapes', label: 'Shapes', count: '02', icon: 'shapes-outline' },
];

export const learnCards: LearnCard[] = [
  {
    key: 'colors',
    category: 'colors',
    categoryLabel: 'Colors',
    title: 'Learn colors with objects',
    lessons: 12,
    minutes: 10,
    bg: '#E9DEFB',
    icon: 'color-palette-outline',
    illustration: 'HomeIllustrate2',
  },
  {
    key: 'letters',
    category: 'letters',
    categoryLabel: 'Letters',
    title: 'Learn letters with fun sounds',
    lessons: 8,
    minutes: 12,
    bg: '#E8F39A',
    icon: 'text',
    illustration: 'HomeIllustrate2',
  },
  {
    key: 'numbers',
    category: 'numbers',
    categoryLabel: 'Numbers',
    title: 'Count numbers playfully',
    lessons: 6,
    minutes: 8,
    bg: '#D6ECF9',
    icon: 'calculator-outline',
    illustration: 'HomeIllustrate2',
  },
  // (numbers keeps home1; shapes below uses home2)
  {
    key: 'shapes',
    category: 'shapes',
    categoryLabel: 'Shapes',
    title: 'Discover shapes around us',
    lessons: 5,
    minutes: 9,
    bg: '#FCE3D2',
    icon: 'shapes-outline',
    illustration: 'HomeIllustrate2',
  },
];
