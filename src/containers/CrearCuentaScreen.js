import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Tab = createBottomTabNavigator();
export default function CrearCuentaScreen({ navigation }) {
    const [emailRegistro, onChangeEmailRegistro] = React.useState("");
    const [nombreRegistro, onChangeNombreRegistro] = React.useState("");
    const [passwordRegistro, onChangePasswordRegistro] = React.useState("");
    const [ApellidosRegistro, onChangeApellidosRegistro] = React.useState("");
    const [NickRegistro, onChangeNickRegistro] = React.useState("");
    return (

        <SafeAreaView style={{
            flex: 1,
            flexDirection: "colum",
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Text style={{
                fontFamily: "Cochin",
                fontSize: 40,
                fontWeight: "bold",
                marginBottom: 40

            }}>Crear Cuenta</Text>

            <View syle={{
                marginBottom: 20
            }}>
                <Text style={{ marginBottom: 5 }}>NOMBRE:</Text>
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
                    onChangeText={onChangeNombreRegistro}
                    value={nombreRegistro}
                />
            </View>
            <View syle={{
                marginBottom: 20
            }}>
                <Text style={{ marginBottom: 5 }}>APELLIDOS:</Text>
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
                    onChangeText={onChangeApellidosRegistro}
                    value={ApellidosRegistro}
                />
            </View>
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
                    onChangeText={onChangeEmailRegistro}
                    value={emailRegistro}
                />
            </View>
            <View syle={{
                marginBottom: 20
            }}>
                <Text style={{ marginBottom: 5 }}>CONTRASEÑA:</Text>
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
                    onChangeText={onChangePasswordRegistro}
                    value={passwordRegistro}
                />
            </View>
            <View syle={{
                marginBottom: 20
            }}>
                <Text style={{ marginBottom: 5 }}>CONFIRMA NICK:</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        marginBottom: 30,
                        borderWidth: 3,
                        borderColor: "orange",
                        borderRadius: 10,
                        padding: 10,
                    }}
                    onChangeText={onChangeNickRegistro}
                    value={NickRegistro}
                />
            </View>
            <Button
                title="Crear Cuenta"
                onPress={() => CreacionUsuario()}
                color="orange"
            />
            <Text style={{ marginTop: 20 }}>¿Ya tienes cuenta?,
                <Text onPress={() => navigation.navigate('IniciarSesion')} style={{ color: "orange" }}>Inicia sesion.
                </Text>
            </Text>

        </SafeAreaView >




    );/* return */

    function CreacionUsuario() {
        return (
            fetch('localhost:8080/Usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "nombre": nombreRegistro,
                    "apellidos": ApellidosRegistro,
                    "correo": emailRegistro,
                    "nick": NickRegistro,
                    "contrasena": passwordRegistro

                }),

            })
                .then((responseJson) => {
                    console.log('getting data from fetch', responseJson);
                    Alert.alert("Usuario Creado Correctamente");
                })
                .catch(error => console.log(error))
        );
    }
}/* app */

