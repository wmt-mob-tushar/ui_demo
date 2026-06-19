// Dummy data for the "Skill progress" chart, with week / month / year ranges.

export type DayBar = {
  /** Short label shown on the x-axis. */
  day: string;
  /** Bar height as a fraction of the chart height (0..1). */
  value: number;
  /** Improvement shown in the tooltip when the bar is active. */
  gain: number;
};

export type RangeKey = 'week' | 'month' | 'year';

export type SkillCategory = {
  key: string;
  label: string;
  ranges: Record<RangeKey, DayBar[]>;
};

export type RangeOption = { label: string; value: RangeKey };

export const rangeOptions: RangeOption[] = [
  { label: 'This Week', value: 'week' },
  { label: 'This Month', value: 'month' },
  { label: 'This Year', value: 'year' },
];

const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const monthLabels = ['W1', 'W2', 'W3', 'W4', 'W5'];
const yearLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const bars = (labels: string[], values: number[], gains: number[]): DayBar[] =>
  labels.map((day, i) => ({ day, value: values[i], gain: gains[i] }));

const range = (week: [number[], number[]], month: [number[], number[]], year: [number[], number[]]) => ({
  week: bars(weekLabels, week[0], week[1]),
  month: bars(monthLabels, month[0], month[1]),
  year: bars(yearLabels, year[0], year[1]),
});

export const skillCategories: SkillCategory[] = [
  {
    key: 'letters',
    label: 'Letters',
    ranges: range(
      [[0.55, 0.78, 0.6, 1.0, 0.68, 0.42, 0.72], [12, 18, 14, 30, 16, 9, 17]],
      [[0.5, 0.72, 0.64, 0.9, 0.6], [22, 34, 28, 41, 26]],
      [[0.4, 0.55, 0.62, 0.7, 0.5, 0.8, 0.66, 0.9, 0.74, 0.58, 0.84, 1.0], [30, 42, 48, 55, 38, 64, 52, 72, 60, 46, 68, 80]],
    ),
  },
  {
    key: 'colors',
    label: 'Colors',
    ranges: range(
      [[0.62, 0.95, 0.5, 0.7, 0.58, 0.8, 0.46], [15, 28, 11, 19, 13, 22, 10]],
      [[0.66, 0.5, 0.82, 0.6, 0.94], [28, 21, 37, 25, 44]],
      [[0.5, 0.46, 0.7, 0.58, 0.86, 0.62, 0.74, 0.5, 0.9, 0.66, 0.78, 0.6], [34, 30, 52, 40, 70, 44, 58, 33, 76, 48, 62, 42]],
    ),
  },
  {
    key: 'shapes',
    label: 'Shapes',
    ranges: range(
      [[0.48, 0.6, 0.72, 0.55, 0.66, 0.92, 0.5], [10, 14, 17, 12, 16, 26, 11]],
      [[0.58, 0.7, 0.5, 0.88, 0.64], [24, 31, 20, 40, 27]],
      [[0.44, 0.6, 0.52, 0.74, 0.66, 0.5, 0.82, 0.7, 0.58, 0.94, 0.62, 0.78], [31, 43, 36, 56, 49, 34, 64, 53, 41, 78, 45, 60]],
    ),
  },
  {
    key: 'animals',
    label: 'Animals',
    ranges: range(
      [[0.7, 0.52, 0.84, 0.6, 0.98, 0.64, 0.74], [17, 11, 24, 14, 31, 15, 18]],
      [[0.62, 0.84, 0.56, 0.74, 0.96], [30, 42, 26, 37, 47]],
      [[0.52, 0.68, 0.6, 0.8, 0.5, 0.72, 0.64, 0.9, 0.58, 0.84, 0.74, 0.96], [36, 50, 44, 62, 33, 54, 47, 72, 40, 66, 56, 78]],
    ),
  },
];

/** Default highlighted bar for a range — "today" mapped into that range. */
export const currentIndex = (key: RangeKey): number => {
  const d = new Date();
  if (key === 'week') return (d.getDay() + 6) % 7; // Mon..Sun
  if (key === 'month') return Math.min(4, Math.floor((d.getDate() - 1) / 7)); // week of month
  return d.getMonth(); // Jan..Dec
};
