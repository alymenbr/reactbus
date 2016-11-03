import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, H3, Content, Button, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class MinhasMensagens extends Component {

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
          <Title>Minhas Mensagens</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <H3>Minhas Mensagens Page</H3>
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

export default connect(null, bindAction)(MinhasMensagens);

{/*
<!--
  Generated template for the MinhasMensagensPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
-->
 <ion-header>
  <ion-navbar primary-dark>
    <ion-title>Minhas Mensagens</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding class="minhas-mensagens">

  <ion-card *ngFor="let msg of messages" (click)="openDetalhesMensagemPage(msg)">

    <ion-card-header>
       Linha {{msg.linhaOnibus}}
    </ion-card-header>

    <ion-item text-wrap>
      <div item-left>
        <ion-avatar>
          <img src={{msg.avatarUrl}}>
        </ion-avatar>
        <ion-badge primary-light item-right>{{msg.points}} {{msg.points == 1? 'ponto': 'pontos'}}</ion-badge>
      </div>

      <h4>por <em accent>{{msg.authorName}}:</em></h4>
      <h4>{{msg.detail}}</h4>
      <em dark>em {{msg.time | timeToString}}</em>
    </ion-item>

  </ion-card>

  <ion-card *ngIf="zeroMessages()" (click)="goBack()">
    <ion-card-header>
       Você não tem mensagens
    </ion-card-header>

    <ion-card-content padding-top>
      <h4>As mensagens que você criar utilizando a opção <span accent><ion-icon name="bus"></ion-icon> Sim, estou no ônibus!</span> serão exibidas aqui.</h4>
      <h4></h4>
      <h4 primary-dark text-center>Toque aqui para voltar</h4>
    </ion-card-content>

   </ion-card>

</ion-content>
*/}
