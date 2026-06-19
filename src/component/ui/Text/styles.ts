import { StyleSheet } from 'react-native-unistyles';
import { TextWeight, typography } from '@/theme';

export const styles = StyleSheet.create(theme => ({
  default: {
    fontFamily: theme.typography.primary.normal,
    fontSize: 16,
    color: theme.colors.text,
  },
  heading: {
    fontFamily: theme.typography.primary.bold,
    fontSize: 24,
    color: theme.colors.text,
  },
  subheading: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 18,
    color: theme.colors.text,
  },
  label: {
    fontFamily: theme.typography.primary.medium,
    fontSize: 14,
    color: theme.colors.text,
  },
}));

export const weightFamily = (weight: TextWeight) => typography.primary[weight];
