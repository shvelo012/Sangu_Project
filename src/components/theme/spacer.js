import { scaled } from './scaler';

const COEFFICIENT = scaled(8);

export const themeSpacing = (value) => value * COEFFICIENT;

export const spacer = (...args) => {
  if (args.length > 4) {
    throw new Error('Invalid number of args');
  }

  return args.map(value => `${themeSpacing(value)}px`).join(' ');
};
