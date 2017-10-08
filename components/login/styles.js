const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: deviceHeight / 4
  },
  text: {
    // fontFamily: 'serif',
    fontSize: 30,
    bottom: 6,
    marginTop: 5
  }
};
