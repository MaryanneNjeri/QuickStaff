import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  base: {
    backgroundColor: '#dfdfdf',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  primary: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#0052cc',
  },
  secondary: {
    backgroundColor: '#33ccff',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  danger: {
    textAlign: 'center',
    width: 100,
    backgroundColor: 'red',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  success: {
    textAlign: 'center',
    width: 100,
    backgroundColor: '#9ACD32',
    color: 'white',
    fontWeight: '200',
    alignItems: 'center',
    justifyContent: 'center',

  },
  fullWidth: {
    textAlign: 'center',
    width: width - 100,
    backgroundColor: '#9ACD32',
    borderRadius: 30,
    color: 'white',
    fontWeight: '200',
    alignItems: 'center',
    justifyContent: 'center',


  },
  logIn: {
    width: width - 30,
    backgroundColor: '#9ACD32',
    textAlign: 'center',
    borderRadius: 30,
    color: 'white',
    fontWeight: '200',
    alignItems: 'center',
    justifyContent: 'center',

  },
  medium: {
    textAlign: 'center',
    width: 140,
    backgroundColor: '#0052cc',
    fontWeight: '200',
    alignItems: 'center',
    justifyContent: 'center',

  },
  withBorder: {
    borderRadius: 30,
    textAlign: 'center',
    width: 120,
    backgroundColor: '#0052cc',
    color: 'white',
    fontWeight: '200',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: 'black',
    fontWeight: '200',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPrimary: {
    color: 'white',
    fontWeight: '200',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

};
