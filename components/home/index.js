import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Icon } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../img/home.jpeg");
const launchscreenLogo = require("../../img/logo.png");

class Home extends Component {
	// eslint-disable-line

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
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
							<Text>Sign In With Google </Text>
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
