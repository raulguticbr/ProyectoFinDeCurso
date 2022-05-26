import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export default function ListadoVehiculosScreen() {
  const obtenerVehiculos =()=>{
    let url='http://127.0.0.1:8000/VehiculosApi';
    fetch(url)
    .then(response=>response.json())
    .then((responseJson)=>{
      setDatos(responseJson)
    })
  }
  
/*   datos = [
    { id: 1, marca: 'Citroen', modelo: 'c4', apodo: 'c4trin', matricula: '0105GPC', descripcion: 'Este es mi primer coche, al que mas cariño le tengo', fecha: '2020/09/24', tipo: 'Coche' },
    { id: 2, marca: 'Citroen', modelo: 'c4', apodo: 'c4trin', matricula: '0105GPC', descripcion: 'Este es mi primer coche, al que mas cariño le tengo', fecha: '2020/09/24', tipo: 'Coche' },
    { id: 3, marca: 'Citroen', modelo: 'c4', apodo: 'c4trin', matricula: '0105GPC', descripcion: 'Este es mi primer coche, al que mas cariño le tengo', fecha: '2020/09/24', tipo: 'Coche' },
    { id: 4, marca: 'Citroen', modelo: 'c4', apodo: 'c4trin', matricula: '0105GPC', descripcion: 'Este es mi primer coche, al que mas cariño le tengo', fecha: '2020/09/24', tipo: 'Coche' },
    { id: 5, marca: 'Citroen', modelo: 'c4', apodo: 'c4trin', matricula: '0105GPC', descripcion: 'Este es mi primer coche, al que mas cariño le tengo', fecha: '2020/09/24', tipo: 'Coche' },
    { id: 6, marca: 'Citroen', modelo: 'c4', apodo: 'c4trin', matricula: '0105GPC', descripcion: 'Este es mi primer coche, al que mas cariño le tengo', fecha: '2020/09/24', tipo: 'Coche' },
    { id: 7, marca: 'Citroen', modelo: 'c4', apodo: 'c4trin', matricula: '0105GPC', descripcion: 'Este es mi primer coche, al que mas cariño le tengo', fecha: '2020/09/24', tipo: 'Coche' },
  ]; 
   Este jSON es porque las llamadas a la api no me funcionan desde el emulador, desde el postman si pero desde el emulador no he podido hacer que obtenga la informacion, por lo que la variable de abajo en vez de poner por defecto Obtenervehiculos se pone datos y ya funciona para hacer las pruebas.
  */
  
  const [datos, setDatos] = React.useState(obtenerVehiculos);

  function renderItem({ item }) {
    return (
      <View style={{
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        marginHorizontal: 25
      }}>

        <View style={{ marginVertical: 20, flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            style={{ width: 300, height: 175 }}
            source={require('../../assets/coche.jpg')}
          />
          <Text style={{fontSize:30, marginBottom:20}}>"{item.apodo}"</Text>
          <View>
            <Text style={{fontSize:20}}>{item.marca} {item.modelo}</Text>
            <Text><Text style={{fontSize:20}}>Matricula:</Text> {item.matricula}</Text>
            <Text><Text style={{fontSize:20}}>Fecha de matriculacion:</Text> {item.fecha}</Text>
            <Text><Text style={{fontSize:20}}>Tipo de vehiculo:</Text> {item.tipo}</Text>
            <Text><Text style={{fontSize:20}}>Descripcion:</Text> {"\n"}{item.descripcion}</Text>
          </View>







        </View>

      </View>
    );

  }
  return (
    <SafeAreaView >
      <FlatList
        data={datos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView >
  );
} //LISTADO STACK