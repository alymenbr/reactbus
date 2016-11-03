import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, H3, Content, Button, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class MensagensProximas extends Component {

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
          <Title>Mensagens Proximas</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <H3>MensagensProximas Page</H3>
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

export default connect(null, bindAction)(MensagensProximas);

{/*
<!--
  Generated template for the MensagensProximasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
-->
 <ion-header>
  <ion-navbar primary-dark>
    <ion-title>Mensagens Próximas</ion-title>
  </ion-navbar>
 </ion-header>

<ion-content padding class="mensagens-proximas">

  <ion-card *ngFor="let msg of messages" (click)="openDetalhesMensagemPage(msg)">
    <ion-card-header>
       Linha {{msg.linhaOnibus}}
    </ion-card-header>

    <ion-item text-wrap>
      <div item-left>
        <ion-avatar>
          <img src={{msg.avatarUrl}}>
        </ion-avatar>
        <ion-badge primary-light item-right>{{msg.distance | distanceToString}}</ion-badge>
      </div>

      <h4>por <em accent>{{msg.authorName}}:</em></h4>
      <h4>{{msg.detail}}</h4>
      <em dark>em {{msg.time | timeToString}}</em>
    </ion-item>
  </ion-card>

  <ion-card *ngIf="zeroMessages()" (click)="openCriarMensagemPage()">
    <ion-card-header>
       Nenhuma mensagem próxima
    </ion-card-header>

    <ion-card-content padding-top>
      <h4>Não encontramos nenhuma mensagem próxima daqui.</h4>
      <h4></h4>
      <h4 primary-dark text-center>Toque aqui e crie a primeira!</h4>
    </ion-card-content>
  </ion-card>



</ion-content>

<ion-footer>
  <ion-toolbar position="bottom" style="margin-bottom: 0.5em;">
    <button accent block large (click)="openCriarMensagemPage()"><ion-icon name="add-circle"></ion-icon>Criar mensagem</button>
  </ion-toolbar>
</ion-footer>
*/}
