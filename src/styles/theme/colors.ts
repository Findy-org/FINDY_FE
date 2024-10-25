export const colors = {
  primary: '#FF6265',
  secondary: '#FFB1B3',
  tertiary: '#FFF5C4',
  white: '#FFFFFF',
  black: '#0F0F0F',
  gray: {
    50: '#F6F8FD',
    100: '#EEF0F6',
    150: '#DCE2E8',
    200: '#CBD1D9',
    300: '#B9BfC7',
    400: '#A1AAB1',
    500: '#7F8996',
    600: '#626C79',
    700: '#49535C',
    800: '#383E45',
    900: '#252A30',
    950: '#15191B',
  },
};

export type Colors = keyof typeof colors;
export const colorNames = Object.keys(colors) as Colors[];
