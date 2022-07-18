/**
 * Joins an array of CSS classes into one string, filtering out falsy values.
 *
 * @param classes - The CSS classes to join into one string.
 *
 * @returns A single string of CSS classes.
 */
export const joinClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");
