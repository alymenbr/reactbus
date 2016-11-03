import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Header, Title, H3, Content, Button, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

const zapbusLogo = require('../../../img/zapbus/zapbus.png');

class Login extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Login</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Image source={zapbusLogo}  />
          <H3>Login Page</H3>
        </Content>

        <Footer >
          <H3>Footer</H3>
        </Footer>
      </Container>

    );
  }
}


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(Login);

{/*
<!--
  Generated template for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
-->
<ion-header>
  <ion-toolbar primary-dark position="top">
    <ion-title>Bem vindo ao ZapBus!</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding class="login">
  <img padding src="img/zapbus.png">

  <h1 padding-top dark>Converse com outros passageiros perto de você!</h1>
  <h1 padding-bottom accent>Vamos começar?</h1>

  <button primary-dark block large (click)="startFacebookLogin()"><ion-icon name="thumbs-up"></ion-icon>Login com Facebook</button>
</ion-content>
*/}
