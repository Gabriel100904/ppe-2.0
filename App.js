import { StatusBar } from 'expo-status-bar';
import {  TextInput, LogBox, StyleSheet, Image , Text, View, TouchableOpacity } from 'react-native';


export default function App() { 
  return (
    <View style={styles.container}>
      <img style={{width: 200}} src={require('./assets/gatinho.jpg')}/>
      <Text style={{fontWeight: "center"}}> Canto do Gatinho</Text>
      <Text>Um app para quem gosta de gatos, nele você pode ver videos e fotos de gatos fofos 
      encontrar dicas para cuidar do seu pet entre outros tipos de entrenimentos para você e seu gato</Text>
      <Text>crie sua conta</Text>
      <TextInput style={{borderWidth:2}} 
      placeholder='Nome'
      />
      <TextInput style={{borderWidth:2}} 
      placeholder='Sobrenome'
      />
      <TextInput style={{borderWidth:2}} 
      placeholder='Data de nascimento'
      />
      <TextInput style={{borderWidth:2}} 
      placeholder='CPF'
      />
      <TextInput style={{borderWidth:2}} 
      placeholder='E-mail'
      />
      <TextInput style={{borderWidth:2}} 
      placeholder='Senha'
      />
      <TouchableOpacity style={{borderWidth:2}} >Criar Conta</TouchableOpacity>

      <StatusBar style="auto" />

      

    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },


});