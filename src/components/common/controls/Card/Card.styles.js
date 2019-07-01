import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  standard: {
    padding: 5,
    color: 'white',
    borderColor: 'rgba(225,225,225,0.2)',
  },
  withShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 10,
    borderRadius: 5,
  },
  withLeftBorder: {
    borderLeftWidth: 5,
    borderLeftColor: 'tomato',
    shadowColor: '#000',
  },
  withRightBorder: {
    borderRightWidth: 5,
    borderRightColor: 'tomato',
    shadowColor: '#000',
  },
  borderShadow: {
    borderLeftWidth: 5,
    borderLeftColor: 'tomato',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  midWidth: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 10,
    borderRadius: 5,
    width: width - 230,
    alignItems: 'center',
    justifyContent: 'center',
  },

};
