/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  Image, 
  Button,
  Alert,
} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      itens: [0, 0, 0, 0, 0],
    };
  }

  sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

  async onPressSelection(sel) {

  }

  async onPress() {

    rand1 = Math.floor(Math.random() * 5) + 40;
    rand2 = Math.floor(Math.random() * 5) + 60;
    rand3 = Math.floor(Math.random() * 5) + 80;
    rand4 = Math.floor(Math.random() * 5) + 100;

    let s = Array();

    for(let a=0; a < 5; a++) { s[a] = 0; }

    this.setState({ 
        itens: [ 0, s[1], s[2], s[3], s[4] ],
    });

    for(let a=0; a < rand4; a++) {
      if(a <= rand1) {
        s[1]++;
        if(s[1] == 5) { s[1] = 1; }  
      }
      if(a <= rand2) {
        s[2]++;
        if(s[2] == 5) { s[2] = 2; }  
      }
      if(a <= rand3) {
        s[3]++;
        if(s[3] == 5) { s[3] = 1; }  
      }
      if(a <= rand4) {
        s[4]++;
        if(s[4] == 5) { s[4] = 1; }  
      }

      await this.sleep(20);
      this.setState({ 
        itens: [ 0, s[1], s[2], s[3], s[4] ],
      });
    }

    let text;
    // Verifica se venceu
    // if( this.state.itens[1] == this.state.itens[2] && 
    //     this.state.itens[2] == this.state.itens[3] &&
    //     this.state.itens[3] == this.state.itens[4]) {
    //   text = "Você Venceu!!!";        
    // }
    // else {
    //   text = "Você Perdeu!!!";         
    // }

    // Alert.alert(
    //   'Resultado Final',
    //   text,
    //   [
    //     {text: 'OK', onPress: () => {} },
    //   ],
    //   { cancelable: false }
    // )
  }

  loadIcon(sel) {
    
    switch(sel) {
      case 1: return require('./src/img/fruta01.png');
      case 2: return require('./src/img/fruta02.png');
      case 3: return require('./src/img/fruta03.png');
      case 4: return require('./src/img/fruta04.png');
      default: return require('./src/img/padrao.png'); 
    }
  }

  render() {

    let img = Array(); 

    for(a=1; a<5; a++){ 
      img[a] = this.loadIcon(this.state.itens[a]);
    }
    

    return (
      <ImageBackground 
        source={ require('./src/img/background.jpg') } 
        style={{width: '100%', height: '100%'}}>

        <View style={styles.panel}>
          <View style={ styles.item } > 
            <Image
                source={ img[1] }
                style={{ width: 72, height: 72 }}
              />
          </View>
          <View style={ styles.item } > 
            <Image
                source={ img[2] }
                style={{ width: 72, height: 72 }}
            />
          </View>
          <View style={ styles.item } > 
            <Image
              source={ img[3] }
              style={{ width: 72, height: 72 }}
            />
          </View>
          <View style={ styles.item } > 
           <Image
              source={ img[4] }
              style={{ width: 72, height: 72 }}
            />
          </View>
        </View>
        <View style={ styles.button }>
          <Button
            onPress={ () => this.onPress() }
            title='Sortear'
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor:'transparent',
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    margin: 10,
  }

});
