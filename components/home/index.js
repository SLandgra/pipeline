import React, { Component } from "react";
import { Image, Dimensions } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Text,
  IconNB,
  Thumbnail
} from "native-base";

const deviceWidth = Dimensions.get("window").width;

import styles from "./styles";

class Header6 extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("NewJob")}><Icon name="more" /></Button>
          </Right>

        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Body>
                  <Text>Slack</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  You applied to 6 jobs here! 3/4 have responded to you.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Header6;
