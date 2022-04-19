import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IniciarSesionScreen from './src/containers/IniciarSesionScreen';
import CrearCuentaScreen from './src/containers/CrearCuentaScreen';
import ContraseñaOlvidadaScreen from './src/containers/ContraseñaOlvidadaScreen';
import MainStack from './src/navigation/MainStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IniciarSesion">
        <Stack.Screen options={{ headerShown: false }} name="IniciarSesion" component={IniciarSesionScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CrearCuenta" component={CrearCuentaScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ContraseñaOlvidada" component={ContraseñaOlvidadaScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Main" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;