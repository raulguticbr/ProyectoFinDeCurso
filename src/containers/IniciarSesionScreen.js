import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
export default function IniciarSesionScreen({ navigation }) {
  const [emailLogIn, onChangeEmailLogIn] = React.useState(null);
  const [passwordLogIn, onChangePasswordLogIn] = React.useState(null);
  const obtenerUsuarios =()=>{
    let url='http://127.0.0.1:8000/Usuarios';
    fetch(url)
    .then(response=>response.json())
    .then((responseJson)=>{
      setDatos(responseJson)
    })
  }
  /* const data = [
    {
      id_usuario: 1,
      nombre: "root",
      apellidos: "root",
      correo: "root",
      nick: "root",
      contraseña: "root",
    },
    {
      id_vehiculo: 2,
      nombre: "ruut",
      apellidos: "ruut",
      correo: "ruut",
      nick: "ruut",
      contraseña: "ruut",
    },
    {
      id_vehiculo: 3,
      nombre: "raat",
      apellidos: "raat",
      correo: "raat",
      nick: "raat",
      contraseña: "raat",
    },
  ]; 
    Este jSON es porque las llamadas a la api no me funcionan desde el emulador, desde el postman si pero desde el emulador no he podido hacer que obtenga la informacion, por lo que la variable de abajo en vez de poner por defecto ObtenerUsuarios se pone data y ya funciona para hacer las pruebas.
  */
  const [usuariosBox, setUsuariosBox] = React.useState(obtenerUsuarios);




  return (

    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Image
        style={{
          width: 300,
          height: 150,
          borderRadius: 20
        }}
        source={require('../../assets/fotoPortada.jpg')}
      />
      <Text style={{
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 40

      }}>EngineGram</Text>

      <View syle={{
        marginBottom: 20
      }}>
        <Text style={{ marginBottom: 5 }}>EMAIL:</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            marginBottom: 5,
            borderWidth: 3,
            borderColor: "orange",
            borderRadius: 10,
            padding: 10,
          }}
          onChangeText={onChangeEmailLogIn}
          value={emailLogIn}
        />
      </View>
      <View syle={{
        marginBottom: 20
      }}>
        <Text style={{ marginBottom: 5 }}>PASSWORD:</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,

            borderWidth: 3,
            borderColor: "orange",
            borderRadius: 10,
            padding: 10,
          }}
          onChangeText={onChangePasswordLogIn}
          value={passwordLogIn}
        />
      </View>
      <View>

        <Text
          onPress={() => navigation.navigate('ContraseñaOlvidada')}
          style={{
            color: "orange",
            marginLeft: 50,
            marginTop: 20,
            fontStyle: "italic",
            marginBottom: 40

          }}>¿Contraseña olvidada?</Text>

      </View>
      <Button
        title="Iniciar Sesion"
        onPress={() => inicioSesion()}
        color="orange"
      />
      <Text style={{ marginTop: 20 }}>
        ¿No tienes cuenta?,
        <Text onPress={() => navigation.navigate('CrearCuenta')} style={{ color: "orange" }}>crea una aqui mismo.
        </Text>
      </Text>

    </SafeAreaView >



  );/* return */


  function inicioSesion() {
    var bandera = false;
    if (emailLogIn == null || passwordLogIn == null) {
      Alert.alert('rellena todos los campos')
    } else {
      for (var i = 0; i < usuariosBox.length; i++) {

        if (emailLogIn == usuariosBox[i].correo) {
          if (passwordLogIn == usuariosBox[i].contraseña) {
            bandera = true;
            navigation.navigate('Main');
            break;
          }
          else {
            bandera=false;

          }
        } else {
          bandera=false;
        }

      }
     
    }
    if (bandera === false) {
      Alert.alert('Los datos introducidos no son coincidentes');
      bandera = 0;
    } else {
      Alert.alert('Sesion iniciada correctamente');
    }

  }


}/* app */




