import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
export default function IniciarSesionScreen({ navigation }) {
  const [emailLogIn, onChangeEmailLogIn] = React.useState("");
  const [passwordLogIn, onChangePasswordLogIn] = React.useState("");
  return (

    <SafeAreaView style={{
      flex: 1,
      flexDirection: "colum",
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
        fontFamily: "Cochin",
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
        onPress={() => navigation.navigate('Main')}
        color="orange"
      />
      <Text style={{ marginTop: 20 }}>
        ¿No tienes cuenta?,
        <Text onPress={() => navigation.navigate('CrearCuenta')} style={{ color: "orange" }}>crea una aqui mismo.
        </Text>
      </Text>

    </SafeAreaView >




  );/* return */

  

}/* app */

