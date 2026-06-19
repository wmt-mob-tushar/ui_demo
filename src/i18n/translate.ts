import i18n from 'i18next';
import type { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';
import { TxKeyPath } from '.';

/**
 * Imperative translate — use outside React render (event handlers, helpers).
 * Not reactive: it reads the current language at call time.
 */
export function translate(key: TxKeyPath, options?: TOptions): string {
  if (i18n.isInitialized) {
    return i18n.t(key, options);
  }
  return key;
}

/**
 * Reactive, typed translate for use inside components. Wraps react-i18next's
 * `useTranslation` so the component re-renders on language change, while
 * keeping the `TxKeyPath` autocomplete from our `translate` helper.
 */
export function useTranslate() {
  const { t } = useTranslation();
  return (key: TxKeyPath, options?: TOptions): string => t(key, options);
}
