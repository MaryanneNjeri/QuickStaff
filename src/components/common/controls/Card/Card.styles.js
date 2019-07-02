import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  standard: {
    fontWeight: '200',
    fontSize: 13,
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
    borderRadius: 5,
    fontWeight: '200',
    fontSize: 13,
    color: 'black',
  },
  withLeftBorder: {
    borderLeftWidth: 5,
    borderLeftColor: 'tomato',
    shadowColor: '#000',
    fontWeight: '200',
    fontSize: 13,
    color: 'black',
  },
  withRightBorder: {
    borderRightWidth: 5,
    borderRightColor: 'tomato',
    shadowColor: '#000',
    fontWeight: '200',
    fontSize: 13,
    color: 'black',
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
    fontWeight: '200',
    fontSize: 13,
    color: 'black',
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
    fontWeight: '200',
    fontSize: 13,
    color: 'black',
  },

};
