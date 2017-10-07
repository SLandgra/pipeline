import React, { Component } from "react";
import { Image, Dimensions, TouchableOpacity, } from "react-native";

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

const companies = [{
  name: 'slack',
  applied: 6,
  replied: 4
},
{
  name: 'google',
  applied: 5,
  replied: 0},
{
  name: 'twitter',
  applied: 3,
  replied: 1
}]

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
        {companies.map((company) => {return(
          <TouchableOpacity style={styles.touch} onPress={()=>this.props.navigation.navigate("SingleCompany")}>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Body>
                  <Text>{company.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  You applied to {company.applied} job(s) here! {company.replied}/{company.applied} have responded to you.
                </Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
        )})}
        </Content>
      </Container>
    );
  }
}

export default Header6;
