export default function(prefix: string): string {
  const numbers = Array(32)
    .fill(0)
    .map(() => Math.round(Math.random() * 10));
  return `${prefix || 'el'}_${numbers.join('')}`;
}
