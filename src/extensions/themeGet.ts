import { cssvarKey } from 'themes/cssvars';
import irisTheme from 'themes/irisTheme';
import get from 'lodash.get';

/**
 * @deprecated Provided only to support the legacy theme system.
 * Converts a JSON key (spacing.medium) into a cssvar (var(--spacing-medium)).
 */
const themeGet = (k: string) => props =>
  (window as any).CSS && (window as any).CSS.supports('--css-var', 0)
    ? `var(${cssvarKey(k)})`
    : get(irisTheme, k);

export default themeGet;
