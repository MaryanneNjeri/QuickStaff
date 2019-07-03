import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  standard: {
    fontWeight: '200',
    fontSize: 13,
  },
  withShadow: {
    card: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      borderRadius: 5,
    },
    text: {
      fontWeight: '200',
      fontSize: 13,
      color: 'black',
    },
  },
  withLeftBorder: {
    card: {
      borderLeftWidth: 5,
      borderLeftColor: 'tomato',
      shadowColor: '#000',
    },
    text: {
      fontWeight: '200',
      fontSize: 13,
      color: 'black',
    },
  },
  withRightBorder: {
    card: {
      borderRightWidth: 5,
      borderRightColor: 'tomato',
      shadowColor: '#000',
    },
    text: {
      fontWeight: '200',
      fontSize: 13,
      color: 'black',
    },
  },
  borderShadow: {
    card: {
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
    text: {
      fontWeight: '200',
      fontSize: 13,
      color: 'black',
    },
  },
  midWidth: {
    card: {
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
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '200',
      fontSize: 13,
      color: 'black',
    },
  },

};
