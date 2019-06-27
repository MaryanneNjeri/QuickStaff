import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  base: {
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,

  },
  primary: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#0052cc',
  },
  secondary: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 100,
    borderWidth: 2,
    borderColor: '#0052cc',
  },
  danger: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: 'red',
  },
  success: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#9ACD32',
  },
  fullWidth: {
    width: width - 100,
    backgroundColor: '#9ACD32',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,

  },
  logIn: {
    width: width - 30,
    backgroundColor: '#9ACD32',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  medium: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    backgroundColor: '#0052cc',
  },

};
