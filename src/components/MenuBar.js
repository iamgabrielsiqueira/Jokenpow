import React from 'react';
import { StyleSheet, ToolbarAndroid, View, Text, Image, TouchableOpacity } from 'react-native';

class MenuBar extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {

		return (

		<View style={ styles.bloco }>
			<View style={ {flex: 1, flexDirection: 'row' } }>
				<TouchableOpacity onPress={ () => { this.props.onPress(1) } }>
					<Text style={ styles.texto }>GAME</Text>
				</TouchableOpacity>
	          	<TouchableOpacity onPress={ () => { this.props.onPress(2) } }>
					 <Image 
			          source={ require('../../img/reset.png') }  
			          style={ styles.imagem }
		          	/>
				</TouchableOpacity>
			</View>
		</View>
	    );
	}
}

const styles = StyleSheet.create({
	texto: {
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
	},
	imagem: {
		marginLeft: 270,
	},
	bloco: {
		justifyContent: 'center',
		backgroundColor: '#1E1649',
		padding: 10,
		paddingLeft: 20,
	},
});

export default MenuBar;