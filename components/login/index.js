import React, { Component } from "react";
import { Image, View, StatusBar, AsyncStorage } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Icon } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../img/home.jpeg");
const launchscreenLogo = require("../../img/logo.png");

function logIn() {
  AsyncStorage.getItem('user')
  .then(function(user){
    if(!user){
      AsyncStorage.setItem('user', JSON.stringify({
        googleid: true
      }))
    }
  })
}

class Login extends Component {
	// eslint-disable-line
  componentWillMount(){
    AsyncStorage.getItem('user')
    .then( result => {
      if(result){
        this.props.navigation.navigate("Home")
      }
    })
  }
  register(){
    logIn()
    this.props.navigation.navigate("Home")
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
