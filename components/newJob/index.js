import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";

import styles from "./styles";

class FloatingLabel extends Component {
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
            <Title>New Job</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{justifyContent:"center"}}>
          <Form>
            <Item floatingLabel>
              <Label>Url</Label>
              <Input />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FloatingLabel;
