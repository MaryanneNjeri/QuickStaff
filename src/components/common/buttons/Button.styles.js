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
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      color: '#ffffff',
      backgroundColor: '#0052cc',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },
  },

  secondary: {
    button: {
      backgroundColor: 'white',
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#33ccff',
    },
    text: {
      color: '#33ccff',
      fontWeight: '200',
    },

  },
  danger: {
    button: {
      width: 100,
      backgroundColor: 'red',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },

  },
  success: {
    button: {
      width: 100,
      backgroundColor: '#9ACD32',
      color: 'white',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },


  },
  fullWidth: {
    button: {
      textAlign: 'center',
      width: width - 100,
      backgroundColor: '#9ACD32',
      borderRadius: 30,
      color: 'white',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },


  },
  logIn: {
    button: {
      width: width - 30,
      backgroundColor: '#9ACD32',
      textAlign: 'center',
      borderRadius: 30,
      color: 'white',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },


  },
  medium: {
    button: {
      textAlign: 'center',
      width: 140,
      backgroundColor: '#0052cc',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },


  },
  withBorder: {
    button: {
      borderRadius: 30,
      width: 120,
      backgroundColor: '#0052cc',
      color: 'white',
      fontWeight: '200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontWeight: '200',
    },

  },


};
