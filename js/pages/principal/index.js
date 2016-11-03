import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, H3, Content, Button, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class Principal extends Component {

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
          <Title>Principal</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <H3>Principal Page</H3>
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

export default connect(null, bindAction)(Principal);

{/*
<!--
  Generated template for the PrincipalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
-->
 <ion-header>
   <ion-navbar primary-dark>
     <button menuToggle>
       <ion-icon name='menu'></ion-icon>
     </button>
    <ion-title>ZapBus</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding class="principal">

    <h1 padding-top padding-bottom dark>Você está no ônibus agora?</h1>

    <button accent block large (click)="openMensagensProximasPage()"><ion-icon name="bus"></ion-icon>Sim, estou no ônibus!</button>
    <button primary-dark block large (click)="openMinhasMensagensPage()"><ion-icon name="home"></ion-icon>Não, estou em outro lugar!</button>

</ion-content>
*/}
