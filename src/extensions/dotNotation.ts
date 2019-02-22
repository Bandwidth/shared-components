import forEach from 'lodash.foreach';

export default <P, ExtraP extends object>(
  obj: P,
  additionalItems: ExtraP,
): P & ExtraP => {
  forEach(additionalItems, (value, key) => (obj[key] = value));
  return obj as P & ExtraP;
};
