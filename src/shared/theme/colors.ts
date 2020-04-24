import { darken } from 'polished';

const baseColors = {
  background: '#36383e',
  text: '#fff',
};

const extendedColors = {
  backgroundLighter1: darken(0.05, baseColors.background),
};

const colors = {
  ...baseColors,
  ...extendedColors,
};

export default colors;
