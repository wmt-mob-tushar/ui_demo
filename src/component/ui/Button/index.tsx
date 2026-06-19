import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { TxKeyPath } from '@/i18n';
import { useTranslate } from '@/i18n/translate';
import { colors } from '@/theme';
import { ButtonVariant } from '@/utils';
import { styles } from './styles';

export interface ButtonProps extends PressableProps {
  tx?: TxKeyPath;
  text?: string;
  variant?: ButtonVariant;
  /** Outside overrides — fill colour, border colour/width and text colour. */
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  textColor?: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = (props: ButtonProps) => {
  const {
    tx,
    text,
    variant = 'fill',
    backgroundColor,
    borderColor,
    borderWidth,
    textColor,
    loading,
    disabled,
    style,
    textStyle,
    ...rest
  } = props;
  const translate = useTranslate();
  const label = tx ? translate(tx) : text;

  const isOutline = variant === 'outline';
  const spinnerColor = textColor ?? (isOutline ? colors.tint : colors.neutral100);

  const override: ViewStyle = {};
  if (backgroundColor) override.backgroundColor = backgroundColor;
  if (borderColor) override.borderColor = borderColor;
  if (borderWidth !== undefined) override.borderWidth = borderWidth;

  return (
    <Pressable
      disabled={disabled || loading}
      style={[styles.base, styles[variant], override, (disabled || loading) && styles.disabled, style]}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={spinnerColor} />
      ) : (
        <Text
          style={[styles.label, isOutline && styles.labelOutline, textColor ? { color: textColor } : null, textStyle]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};
