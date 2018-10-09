import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class Gil extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }
  
  render() {

  	return (
  		
         <View style={styles.main}>
            <View style={ {flex: 1 } }>
              <TouchableOpacity onPress={ () => { this.props.onPress(3) } }>
                <Image 
                  source={ require('../../img/pedra_vs.png') }  
                  style={ {margin: 5, width: 64, height: 64} }
                />
              </TouchableOpacity>
            </View>

            <View style={ {flex: 1 } }>
              <TouchableOpacity onPress={ () => { this.props.onPress(4) } }>
                <Image 
                      source={ require('../../img/spock_vs.png') }  
                      style={ {margin: 5, width: 64, height: 64} }
                      />
              </TouchableOpacity>
            </View>

            <View style={ {flex: 1 } }>
              <TouchableOpacity onPress={ () => { this.props.onPress(5) } }>
                <Image 
                      source={ require('../../img/tesoura_vs.png') }  
                      style={ {margin: 5, width: 64, height: 64} }
                      />
              </TouchableOpacity>
            </View>

            <View style={ {flex: 1 } }>
              <TouchableOpacity onPress={ () => { this.props.onPress(6) } }>
                <Image 
                      source={ require('../../img/lagarto_vs.png') }  
                      style={ {margin: 5, width: 64, height: 64} }
                      />
              </TouchableOpacity>
            </View>

            <View style={ {flex: 1 } }>
              <TouchableOpacity onPress={ () => { this.props.onPress(7) } }>
                <Image 
                      source={ require('../../img/papel_vs.png') }  
                      style={ {margin: 5, width: 64, height: 64} }
                      />
              </TouchableOpacity>
            </View>
          </View>	
    );
   }
}

const styles = StyleSheet.create({

	main: {
		flex: 1,
		flexDirection: 'row',
		margin: 10,
	},
});

export default Gil;