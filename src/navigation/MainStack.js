import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoVehiculosScreen from '../containers/ListadoVehiculosScreen';
import CrearVehiculoStack from './CrearVehiculoStack';
import Ionicons from 'react-native-vector-icons/AntDesign';


export default function MainStack() {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000',
                activeBackgroundColor: 'red',
                inactiveTintColor: '#FFF',
                inactiveBackgroundColor: 'orange',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'ListadoVehiculos') {
                        iconName = focused
                            ? 'tool'
                            : 'car';
                    } else if (route.name === 'CrearVehiculos') {
                        iconName = focused ? 'database' : 'idcard';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'red',
            })}
        >
            <Tab.Screen
                name="ListadoVehiculos"
                component={ListadoVehiculosScreen}
                options={{ headerStyle: { backgroundColor: 'orange' }, headerTitleAlign: 'center' }}

            />
            <Tab.Screen
                name="CrearVehiculos"
                component={CrearVehiculoStack}
                options={{ headerStyle: { backgroundColor: 'orange' }, headerTitleAlign: 'center' }}
            />
        </Tab.Navigator>

    );
} //LISTADO STACK