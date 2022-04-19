import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoVehiculosScreen from '../containers/ListadoVehiculosScreen';
import CrearVehiculoScreen from '../containers/CrearVehiculoScreen';
import Ionicons from 'react-native-vector-icons/Entypo';


export default function MainStack() {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000',
                activeBackgroundColor: '#830583',
                inactiveTintColor: '#FFF',
                inactiveBackgroundColor: '#D50BD5',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Historia') {
                        iconName = focused
                            ? 'open-book'
                            : 'book';
                    } else if (route.name === 'Musicos') {
                        iconName = focused ? 'spotify' : 'spotify-with-circle';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
            })}
        >
            <Tab.Screen
                name="Listado de Vehiculos"
                component={ListadoVehiculosScreen}
                options={{ headerStyle: { backgroundColor: '#D50BD5' }, headerTitleAlign: 'center' }}

            />
            <Tab.Screen
                name="Crear Vehiculos"
                component={CrearVehiculoScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>

    );
} //LISTADO STACK