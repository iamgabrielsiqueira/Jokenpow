import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import Head from './src/components/Head';
import MenuBar from './src/components/MenuBar';
import Gil from './src/components/Gil';
import GameBar from './src/components/GameBar';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      img: 0,
      reset: 0,
      ponto1: 0,
      ponto2: 0,
      selecao: 0,
      player2: 1,
    };
  }

  async onPress(val) {

    if(val != 1 || val != 2) {
      ran = Math.floor(Math.random() * (5 - 1) + 1);

      this.setState({ player2: ran })
    }

    switch(val) {
        case 1:
            if(this.state.img == 0) {
              this.setState({ img: 1})
            }
            else {
              this.setState({ img: 0}) 
            }    
          break;
        case 2:
            this.setState({ ponto1: 0, ponto2: 0})
          break;
        case 3:
            this.setState({ selecao: 1})
            if(ran == 4 || ran == 3) {
              this.setState({ ponto1: this.state.ponto1 + 1 })
              alert("Ganhou!");
            } else {
              this.setState({ ponto2: this.state.ponto2 + 1 })
              alert("Perdeu =(");
            }
          break;
        case 4:
            this.setState({ selecao: 2})
            if(ran == 1 || ran == 3) {
              this.setState({ ponto1: this.state.ponto1 + 1 })
              alert("Ganhou!");
            } else {
              this.setState({ ponto2: this.state.ponto2 + 1 })
              alert("Perdeu =(");
            }
          break;
        case 5:
            this.setState({ selecao: 3})
            if(ran == 4 || ran == 5) {
              this.setState({ ponto1: this.state.ponto1 + 1 })
              alert("Ganhou!");
            } else {
              this.setState({ ponto2: this.state.ponto2 + 1 })
              alert("Perdeu =(");
            }
          break;
        case 6:
            this.setState({ selecao: 4})
            if(ran == 2 || ran == 5) {
              this.setState({ ponto1: this.state.ponto1 + 1 })
              alert("Ganhou!");
            } else {
              this.setState({ ponto2: this.state.ponto2 + 1 })
              alert("Perdeu =(");
            }
          break;
        case 7:
            this.setState({ selecao: 5})
            if(ran == 1 || ran == 2) {
              this.setState({ ponto1: this.state.ponto1 + 1 })
              alert("Ganhou!");
            } else {
              this.setState({ ponto2: this.state.ponto2 + 1 })
              alert("Perdeu =(");
            }
          break;
      }

  }

  render() {
    ran = Math.floor(Math.random() * (5 - 1) + 1);
    return (
      <ScrollView style={styles.main}>
        <MenuBar onPress={(val) => this.onPress(val)} />
        <Head img={this.state.img} />
        <Gil onPress={(val) => this.onPress(val)}/>
        <GameBar selecao={this.state.selecao} ponto1={this.state.ponto1} ponto2={this.state.ponto2} player2={this.state.player2}/>
      </ScrollView>

    );
  }_
}

const styles = StyleSheet.create({

  main: {
    flex:1,
    backgroundColor: '#413678',
    marginTop: 24,
  },

});
