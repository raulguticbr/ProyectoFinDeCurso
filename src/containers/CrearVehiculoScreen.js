import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, SafeAreaView, FlatList, RefreshControl, Image, TextInput, Button, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Feather';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';



const Stack = createNativeStackNavigator();
export default function CrearVehiculoScreen() {
  const [Tipo, setTipo] = React.useState();
  const [Marca, setMarca] = React.useState();
  const [Modelo, setModelo] = React.useState();
  const [Descripcion, setDescripcion] = React.useState();
  const [Apodo, setApodo] = React.useState();
  const [Año, setAño] = React.useState('');
  const [Matricula, setMatricula] = React.useState();
  return (
    <ScrollView>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <Text style={{
          fontSize: 30
          , marginBottom: 50
        }}>Rellena los datos de tu vehiculo</Text>



        <View style={{
          flexDirection: "row",

        }}>

          <TextInput
            style={{
              borderColor: 'black', borderBottomWidth: 1, marginVertical: 10, width: 150,
              height: 40,
              margin: 10
            }}
            onChangeText={setMarca}
            value={Marca}
            placeholder="Marca"

          />
          <TextInput
            style={{
              borderColor: 'black', borderBottomWidth: 1, marginVertical: 10, width: 150,
              height: 40
            }}
            onChangeText={setModelo}
            value={Modelo}
            placeholder="Modelo"

          />
        </View>

        <View style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <TextInput
            style={{
              borderColor: 'black', borderBottomWidth: 1, marginVertical: 10, width: 150,
              height: 40,
              margin: 10
            }}
            onChangeText={setApodo}
            value={Apodo}
            placeholder="Apodo"

          />
          <TextInput
            style={{
              borderColor: 'black', borderBottomWidth: 1, marginVertical: 10, width: 150,
              height: 40
            }}
            onChangeText={setMatricula}
            value={Matricula}
            placeholder="Matricula "

          />
        </View>

        <View style={{
          flexDirection: "column",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'left',


        }}>

          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{
              height: 200,
              textAlignVertical: 'top',
              borderColor: 'black', borderBottomWidth: 1, marginVertical: 10, width: 300,
              height: 90,
              marginLeft: 20
            }}
            onChangeText={setDescripcion}
            value={Descripcion}
            placeholder="Descripcion"

          />
          {/* 
          <DateTimePicker
            style={{
              borderColor: 'black', borderBottomWidth: 1, marginVertical: 10, width: 150,
              height: 40,
              marginLeft:20
            }}
            value={Año}
            onChangeText={setAño}
            
            

          />
          */}



          <Picker
            selectedValue={Tipo}
            onValueChange={(itemValue, itemIndex) =>
              setTipo(itemValue)

            }
            style={{
              width: 350,
              height: 10
            }}
          >
            <Picker.Item label="Coche" value="Coche" />
            <Picker.Item label="Moto" value="Moto" />
          </Picker>

        </View>
      </View>
    </ScrollView>

  );
} //LISTADO STACK