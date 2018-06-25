import { cssvarKey } from 'theme/cssvars';

/**
 * @deprecated Provided only to support the legacy theme system.
 * Converts a JSON key (spacing.medium) into a cssvar (var(--spacing-medium)).
 */
const themeGet = k => props => `var(${cssvarKey(k)})`;

export default themeGet;
