import { zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

export const stylesAnimation = StyleSheet.create({
  zoomIn: {
    // visibility: 'visible',
    animationName: zoomIn,
    animationDuration: '0.5s',
  },
  zoomIn2: {
  // visibility: 'visible',
  animationName: zoomIn,
  animationDuration: '2s',
  },

});
