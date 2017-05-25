export default function (prefix) {
  const numbers = Array(32).fill(0).map(() => Math.round(Math.random() * 10));
  return `${prefix || 'el'}_${numbers.join('')}`;
}
