import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class GameBar extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	ponto1: 10,
	  	ponto2: 0,
    };
	}

	async loadIcon(sel) {
    
    switch(sel) {
      case 1: return require('../../img/pedra_vs.png');
      break;
      case 2: return require('../../img/spock_vs.png');
      break;
      case 3: return require('../../img/tesoura_vs.png');
      break;
      case 4: return require('../../img/lagarto_vs.png');
      break;
      case 5: return require('../../img/tesoura_vs.png');
      break;
    }

  }

  select(ran) {
  	switch(ran) {
	      case 1: 
	      		img = require('../../img/pedra_vs.png');
	      		return img;
	      	break;
	      case 2: 
	      		img = require('../../img/spock_vs.png');
	      		return img;
	      	break;
	      case 3: 
	      		img = require('../../img/tesoura_vs.png');
	      		return img;
	      	break;
	      case 4: 
	      		img = require('../../img/lagarto_vs.png');
	      		return img;
	      	break;
	      case 5: 
	      		img = require('../../img/tesoura_vs.png');
	      		return img;
	      	break;
	  }
  }

  // ganhou() {
  // 	this.setState({
  // 				ponto1: this.state.ponto1 + 1,
  // 				ponto2: this.state.ponto2,
		// })
  // }

  // verifica(player1, player2) {

  // 	if(player1 == 1) {
  // 		if(player2 == 4) {
  // 			alert("ganhou");
  // 		} else if (player2 == 3) {
  // 			alert("ganhou");
  // 		} else {
  // 			alert("perdeu");
  // 		}
  // 	} else if(player1 == 2) {
  // 		if(player2 == 1) {
  // 			alert("ganhou");
  // 		} else if (player2 == 3) {
  // 			alert("ganhou");
  // 		} else {
  // 			alert("perdeu");
  // 		}
  // 	} else if(player1 == 3) {
  // 		if(player2 == 4) {
  // 			alert("ganhou");
  // 		} else if (player2 == 5) {
  // 			alert("ganhou");
  // 		} else {
  // 			alert("perdeu");
  // 		}
  // 	} else if(player1 == 4) {
  // 		if(player2 == 2) {
  // 			alert("ganhou");
  // 		} else if (player2 == 5) {
  // 			alert("ganhou");
  // 		} else {
  // 			alert("perdeu");
  // 		}
  // 	} else if(player1 == 5) {
  // 		if(player2 == 1) {
  // 			alert("ganhou");
  // 		} else if (player2 == 2) {
  // 			alert("ganhou");
  // 		} else {
  // 			alert("perdeu");
  // 		}
  // 	}
  // }


	render() {

		let img = require('../../img/pedra_vs.png');

		if(this.props.selecao == 1) {
			image = require('../../img/pedra_vs.png');
			img = this.select(this.props.player2);
		} else if(this.props.selecao == 2) {
			image = require('../../img/spock_vs.png');
			img = this.select(this.props.player2);
		} else if(this.props.selecao == 3) {
			image = require('../../img/tesoura_vs.png');
			img = this.select(this.props.player2);
		} else if(this.props.selecao == 4) {
			image = require('../../img/lagarto_vs.png');
			img = this.select(this.props.player2);
		} else if(this.props.selecao == 5) {
			image = require('../../img/papel_vs.png');
			img = this.select(this.props.player2);
		} else {
			image = require('../../img/pedra_vs.png');
			img = this.select(this.props.player2);
		}

		// this.verifica(this.props.selecao, ran);

		return (
				<View style={ styles.bloco }> 
					<View style={ styles.versusBar }>
						<Image 
				          source={ require('../../img/bar_versus2.png') }  
				          style={ {flex: 1, width: 320, height: 70} }
			          />
					</View>
			          <View style={ styles.main }>
				         <Image 
					          source={ image }
					          style={ {flex: 1, margin: 16, width: 80, height: 80} }
				          />
				          <Image 
					          source={ require('../../img/versus.png') }  
					          style={ {flex: 1, margin: 16, width: 100, height: 60} }
				          />
				         <Image 
					          source={ img }  
					          style={ {flex: 1, margin: 16, width: 80, height: 80} }
				          />
			        </View>
			        <View style={ styles.placar }>
						<View style={ styles.box01 }>
							<Text style={ styles.pontos }> { this.props.ponto1 } </Text>
						</View>
						<View style={ styles.box01 }>
							<Text style={ styles.pontos }> { this.props.ponto2 } </Text>
						</View>
					</View>
		        </View>		
		    );
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
	    flexDirection: 'row',
		alignItems: 'center',
	  	justifyContent: 'center',
	  },
	versusBar: {
	  	alignItems: 'center',
	  	justifyContent: 'center',
	  	paddingTop: 10,
	  },
	bloco: {
	  	backgroundColor: 'white',
	  	width: 370,
	  	justifyContent: 'center',
	  	margin: 20,
	  	marginTop: 0,
	  	borderColor: 'black',
	  	borderStyle: 'solid',
	  	borderWidth: 2,
	  },
	placar: {
	  	alignItems: 'center',
	  	justifyContent: 'center',
	  	paddingTop: 10,
	  	flex: 1,
	    flexDirection: 'row',
	  },
	box01: {
	  	backgroundColor: '#413678', 
	  	margin: 10,
	  	marginLeft: 20, 
	  	padding: 10,
	  	width: 120,
	  	height: 40,
	  	borderRadius: 20,
	  	justifyContent: 'center',
	  },
	pontos: {
		fontWeight: 'bold',
		fontStyle: 'italic', 
		color: 'white', 
		fontSize: 20, 
		textAlign: 'center',
	}
});

export default GameBar;