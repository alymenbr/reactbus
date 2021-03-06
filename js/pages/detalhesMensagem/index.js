import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, H3, Content, Button, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class DetalhesMensagem extends Component {

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
          <Title>Detalhes da Mensagem</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <H3>Detalhes Mensagem Page</H3>
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

export default connect(null, bindAction)(DetalhesMensagem);

{/*
<!--
  Generated template for the DetalhesMensagemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
-->
 <ion-header>
  <ion-navbar primary-dark>
    <ion-title>Detalhes da Mensagem</ion-title>
  </ion-navbar>
 </ion-header>


<!-- TODO: Imagem de fundo do Streetview:
  http://stackoverflow.com/questions/30870083/nearest-street-view-photo-to-coordinates
-->
<ion-content padding class="detalhes-mensagem">

  <ion-card>
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

    <div id="map"></div>

    <ion-row no-padding>
       <ion-col>
         <button medium primary (click)='approveMessage()'>
           <ion-icon name='thumbs-up'></ion-icon>
          {{fillAprovallText()}}
         </button>
       </ion-col>
       <ion-col text-right>
         <button medium accent (click)='reproveMessage()'>
           <ion-icon name='thumbs-down'></ion-icon>
           {{fillReprovallText()}}
         </button>
       </ion-col>
     </ion-row>

     <ion-item>
         <button primary clear item-left>
           <ion-icon name="thumbs-up"></ion-icon>
           <div>{{msg.approvals}} {{msg.approvals == 1? 'aprovação': 'aprovações'}}</div>
         </button>
         <button accent clear item-right>
           <ion-icon name="thumbs-down"></ion-icon>
           <div>{{msg.reprovals}} {{msg.reprovals == 1? 'reprovação': 'reprovações'}}</div>
         </button>
       </ion-item>

  </ion-card>

  <ion-card>
    <ion-card-header>
      Comentários da mensagem
    </ion-card-header>

    <ion-list>
      <ion-item text-wrap *ngFor="let comment of comentarios">
        <ion-avatar item-left>
          <img src={{comment.avatarUrl}}>
        </ion-avatar>
        <h3>{{comment.detail}}</h3>
        <p>por <em accent>{{comment.author}}</em></p>
        <em light>em {{comment.time | timeToString}}</em>
      </ion-item>

      <ion-item>
        <ion-input placeholder='escreva aqui' [(ngModel)]="novoComentario" type="text"></ion-input>
        <button accent item-right (click)='sendComment()'><ion-icon name="send"></ion-icon>Enviar</button>
      </ion-item>


    </ion-list>
  </ion-card>

</ion-content>
*/}
