import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Cabeçalho com botão de ajuda */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpText}>?</Text>
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>VIA FÁCIL</Text>
        </View>

        {/* Botão Google com ícone */}
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('./assets/google-icon.png')} style={styles.icon} />
          <Text style={styles.googleText}>Entrar com Google</Text>
        </TouchableOpacity>

        {/* Botão Facebook com ícone */}
        <TouchableOpacity style={styles.facebookButton}>
          <Image source={require('./assets/facebook-icon2.jpeg')} style={styles.icon} />
          <Text style={styles.facebookText}>Entrar com Facebook</Text>
        </TouchableOpacity>

        {/* Separador */}
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.orText}>ou</Text>
          <View style={styles.separator} />
        </View>

        {/* Campos de login */}
        <TextInput
          placeholder="Nome de usuário"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />

        {/* Botão Login */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        {/* Esqueceu senha - botão clicável */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu a senha ou nome de usuário?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6EAF8',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  helpButton: {
    backgroundColor: '#3498DB',
    borderRadius: 50,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  helpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  facebookText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#aaa',
  },
  orText: {
    marginHorizontal: 10,
    color: '#555',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotText: {
    marginTop: 12,
    textAlign: 'center',
    color: '#2980b9',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});

export default App;
