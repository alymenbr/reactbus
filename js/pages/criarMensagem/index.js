import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, H3, Content, Button, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class CriarMensagem extends Component {

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
          <Title>Criar Mensagem</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <H3>Criar Mensagem Page</H3>
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

export default connect(null, bindAction)(CriarMensagem);


{/*
<!--
  Generated template for the CriarMensagemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
-->
 <ion-header>
  <ion-navbar primary-dark>
    <ion-title>Crie sua mensagem</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding class="criar-mensagem">
  <ion-card>
    <ion-card-header>
       Ela será visível perto daqui:
     </ion-card-header>

      <div id="map"></div>
  </ion-card>

  <ion-card>
      <ion-list>
        <ion-item>
          <ion-label floating>Sua linha de ônibus:</ion-label>
          <ion-input maxlength="10" [(ngModel)]="linhaOnibus" type="text"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label floating>Sua mensagem:</ion-label>
          <ion-input maxlength="140" [(ngModel)]="novaMensagem" type="text"></ion-input>
        </ion-item>
      </ion-list>
  </ion-card>

</ion-content>

<ion-footer>
  <ion-toolbar position="bottom" style="margin-bottom: 0.5em;">
    <button accent block large (click)="saveMessage()"><ion-icon name="add-circle"></ion-icon>Criar!</button>
  </ion-toolbar>
</ion-footer>
*/}
