import { light } from 'styles/theme';

const dark: typeof light = {
  ...light,
  palette: {
    ...light.palette,
    grey: 'rgb(212 214 224)',
    lightGrey: 'rgb(52 50 51)',
    darkGrey: 'rgb(243 243 243)',
    background: 'rgb(39 39 39)',
  },
};

export default dark;
