import React, { Component } from "react";
import { Image, View, StatusBar, AsyncStorage } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Icon } from "native-base";
import Expo from 'expo';


import styles from "./styles";

const launchscreenBg = require("../../img/home.jpeg");
const launchscreenLogo = require("../../img/logo.png");

function logIn() {
  AsyncStorage.getItem('user')
  .then(function(user){
    if(!user){
      async function signInWithGoogleAsync() {
        try {
          const result = await Expo.Google.logInAsync({
            // androidClientId: YOUR_CLIENT_ID_HERE,
            iosStandaloneAppClientId: process.env.GOOGLE_CLIENT_ID,
            scopes: ['profile', 'email'],
          });

          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return {cancelled: true};
          }
        } catch(e) {
          return {error: true};
        }
      }
      AsyncStorage.setItem('user', JSON.stringify({
        googleid: true
      }))
      this.props.navigation.navigate("Home")
    }
  })
}

async function signInWithGoogleAsync() {
  // console.log(process.env.GOOGLE_CLIENT_ID);
  try {
    const result = await Expo.Google.logInAsync({
      // androidClientId: YOUR_CLIENT_ID_HERE,
      iosStandaloneAppClientId: "349814409912-f8s2r8piliiqtkvs755g37jut80e11qt.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
      behavior: 'web'
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    this.props.alertWithType('error', 'Error', e);
  }
}

class Login extends Component {
	// eslint-disable-line
  componentWillMount(){
    AsyncStorage.getItem('user')
    .then( result => {
      if(result){
        // this.props.navigation.navigate("Home")
        console.log('should be logging in');
      }
    })
  }
  register(){
    // logIn()
    signInWithGoogleAsync()
    // this.props.navigation.navigate("Home")
  }
	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
        <View style={styles.logoContainer}>

        </View>
          <View
						style={{
							alignItems: "center",
							marginBottom: 50,
							backgroundColor: "transparent",
						}}
					>
						<Text style={styles.text}>Welcome to Pipeline!</Text>
					</View>
					<View style={{ marginBottom: 80 }}>
						<Button bordered danger
							style={ {alignSelf: "center" }}
							onPress={() => this.register()}
						>
							<Text>Sign In With Google </Text>
              <Icon
              name="logo-googleplus"
              style={{ width: 45, justifyContent: "center" }}
            />
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Login;
