import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Imagem de fundo preenchendo toda a tela */}
        <Image
          source={require('./assets/mapafundo.png')} // imagem do mapa azul
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        {/* Logo centralizada */}
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/via.png')} // logo VIA FÁCIL
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    position: 'absolute',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 logo: {
  width: 150,
  height: 150,
  borderRadius: 75, // metade da largura/altura
  backgroundColor: '#fff', // opcional, para destacar o círculo
},
});

export default App;
