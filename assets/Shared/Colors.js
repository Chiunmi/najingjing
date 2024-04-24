import { LinearGradient } from 'expo-linear-gradient';

const gradientBlue = {
  colors: ['blue', 'black'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
};

export { gradientBlue };

const Colors = {
  white: '#fff',
  cobaltblue: '#003163',
  orange: '#ea7202',
  cobaltblueGradient: gradientBlue, // Assigning the gradient directly to a property
};

export default Colors;
