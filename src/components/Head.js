import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Head extends React.Component {

	render() {

		if(this.props.img == 0) {
			image = require('../../img/header_p.png');
		}
		else {
			image = require('../../img/regra.png');	
		}

		return (
		<View style={ styles.main }> 
          <Image 
	          source={ image }  
	          style={ styles.imagem }
          />
        </View>		
    );
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
	    flexDirection: 'row',
	    // width: 250,
	    // alignItems: 'center',
	    // justifyContent: 'center',
	 },
	imagem: {
		flex: 1, 
		margin: 16, 
		marginBottom: 0, 
		width: 380, 
		height: 250,
		resizeMode: 'stretch',
	},
});

export default Head;