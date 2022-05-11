import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
export default function ContraseñaOlvidadaScreen({ navigation }) {
  const [emailLogIn, onChangeEmailLogIn] = React.useState("");
  const [passwordLogIn, onChangePasswordLogIn] = React.useState("");
  return (

    <SafeAreaView  style={{
      flex: 1,
      flexDirection: "colum",
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Text style={{
        fontFamily: "Cochin",
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10

      }}>Recuperacion de contraseña</Text>

      <Text style={{width:300,marginBottom:40}}>Introduce tu direccion email para poder conocer tu contraseña.</Text>

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
      <Button
        title="Enviar"
        onPress={() => Alert.alert('Contraseña enviada, revise su direccion de correo.')}
        color="orange"
      />
      <Text style={{ marginTop: 20 }}>
        ¿Has cambiado de opinion?, 
        <Text onPress={() => navigation.navigate('IniciarSesion')} style={{ color: "orange" }}>Inicia sesion.
        </Text>
        </Text>

    </SafeAreaView >




  );/* return */


}/* app */