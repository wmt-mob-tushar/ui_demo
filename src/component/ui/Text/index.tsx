import { ReactNode } from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from 'react-native';
import { TOptions } from 'i18next';
import { TxKeyPath } from '@/i18n';
import { useTranslate } from '@/i18n/translate';
import { TextPreset, TextWeight } from '@/theme';
import { styles, weightFamily } from './styles';

export interface TextProps extends RNTextProps {
  tx?: TxKeyPath;
  text?: string;
  txOptions?: TOptions;
  preset?: TextPreset;
  weight?: TextWeight;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export const Text = (props: TextProps) => {
  const { tx, text, txOptions, preset = 'default', weight, size, color, style, children, ...rest } =
    props;

  const translate = useTranslate();
  const content = tx ? translate(tx, txOptions) : (text ?? children);

  const override: TextStyle = {
    ...(weight ? { fontFamily: weightFamily(weight) } : null),
    ...(size ? { fontSize: size } : null),
    ...(color ? { color } : null),
  };

  return (
    <RNText style={[styles[preset], override, style]} {...rest}>
      {content}
    </RNText>
  );
};
