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

const jobs = [{
  name: 'Summer Software Engineering Intern',
  status: 'Accepted'
},
{
  name: 'Trash Collector',
  status: 'Rejected'
},
{
  name: 'Boss',
  status: 'Accepted'
}]

const deviceWidth = Dimensions.get("window").width;

import styles from "./styles";

const data = jobs.map((job) => {return(
  <Card style={styles.mb} onPress={() => this.props.navigation.navigate("SingleCompany")}>
    <CardItem bordered>
      <Left>
        <Body>
          <Text>{job.name}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem>
      <Body>
        <Text>
          Status: {job.status}
        </Text>
      </Body>
    </CardItem>
  </Card>
)})

class SingleCompany extends Component {
  // eslint-disable-line
  render() {
    return (
      <Container style={styles.container}>
        <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
          <Body>
            <Title>Company Name Here</Title>
          </Body>
        </Header>

        <Content padder>
        {data}
        </Content>
      </Container>
    );
  }
}

export default SingleCompany;
