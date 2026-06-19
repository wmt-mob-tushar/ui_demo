// Dummy data for the onboarding carousel.

export type OnboardSlide = {
  key: string;
  /** First line of the card heading. */
  label: string;
  /** Highlighted pill line of the heading. */
  pill: string;
  desc: string;
  bg: string;
  /** Figma rotation in degrees (use with theme.rotation). */
  rotation: number;
};

export const onboardingSlides: OnboardSlide[] = [
  {
    key: 'personalized',
    label: 'Personalized',
    pill: 'Learning',
    desc: "Lessons adapt to your child's pace, focusing on what they need most.",
    bg: '#CADDF7',
    rotation: 1.71,
  },
  {
    key: 'games',
    label: 'Fun Games &',
    pill: 'Activities',
    desc: 'Playful challenges turn everyday practice into something kids look forward to.',
    bg: '#DFF28A',
    rotation: -7.47,
  },
  {
    key: 'feedback',
    label: 'Instant',
    pill: 'Feedback',
    desc: 'Gentle, real-time nudges keep every learner on track, step by step.',
    bg: '#F2D1D0',
    rotation: 7.95,
  },
];
