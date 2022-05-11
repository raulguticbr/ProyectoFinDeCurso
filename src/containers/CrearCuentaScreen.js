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
    const [telefonmoRegistro, onChangeTelefonoRegistro] = React.useState("");
    const [conPassRegistro, onChangeConPassRegistro] = React.useState("");
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
                <Text style={{ marginBottom: 5 }}>TELEFONO:</Text>
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
                    onChangeText={onChangeTelefonoRegistro}
                    value={telefonmoRegistro}
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
                <Text style={{ marginBottom: 5 }}>CONFIRMA CONTRASEÑA:</Text>
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
                    onChangeText={onChangeConPassRegistro}
                    value={conPassRegistro}
                />
            </View>
            <Button
                title="Crear Cuenta"
                onPress={() => Alert.alert('Cuenta creada correctamente')}
                color="orange"
            />
            <Text style={{ marginTop: 20 }}>¿Ya tienes cuenta?,
                <Text onPress={() => navigation.navigate('IniciarSesion')} style={{ color: "orange" }}>Inicia sesion.
                </Text>
            </Text>

        </SafeAreaView >




    );/* return */


}/* app */