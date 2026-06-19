import { colors } from '@/theme';
import { TxKeyPath } from '@/i18n';

export interface LessonItem {
  id: string;
  letter: string;
  titleKey: TxKeyPath;
  descKey: TxKeyPath;
  duration: string;
  bg: string;
  buttonTextKey: TxKeyPath;
  status: 'completed' | 'active' | 'locked' | 'faded';
}

export const lessonsData: LessonItem[] = [
  {
    id: '1',
    letter: 'A',
    titleKey: 'lessonsScreen:aAppleTitle',
    descKey: 'lessonsScreen:aAppleDesc',
    duration: '2 min',
    bg: colors.cream,
    buttonTextKey: 'lessonsScreen:replay',
    status: 'completed',
  },
  {
    id: '2',
    letter: 'B',
    titleKey: 'lessonsScreen:bBallTitle',
    descKey: 'lessonsScreen:bBallDesc',
    duration: '3 min',
    bg: colors.pink,
    buttonTextKey: 'lessonsScreen:continue',
    status: 'active',
  },
  {
    id: '3',
    letter: 'D',
    titleKey: 'lessonsScreen:dDogTitle',
    descKey: 'lessonsScreen:dDogDesc',
    duration: '5 min',
    bg: colors.lightBlue,
    buttonTextKey: 'lessonsScreen:startLesson',
    status: 'locked',
  },
  {
    id: '4',
    letter: 'C',
    titleKey: 'lessonsScreen:cCatTitle',
    descKey: 'lessonsScreen:cCatDesc',
    duration: '10 min',
    bg: colors.lavender,
    buttonTextKey: 'lessonsScreen:startLesson',
    status: 'locked',
  },
  {
    id: '5',
    letter: 'E',
    titleKey: 'lessonsScreen:eElephantTitle',
    descKey: 'lessonsScreen:eElephantDesc',
    duration: '10 min',
    bg: colors.green,
    buttonTextKey: 'lessonsScreen:startLesson',
    status: 'faded',
  },
];
