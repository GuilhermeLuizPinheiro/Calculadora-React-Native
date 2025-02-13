import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Alert, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function somar() {
    if (valor1 == '' || valor2 == '') {
      Alert.alert('Preencha os campos!!');
    }
    else {
      let r = parseFloat(valor1.replace(",", ".")) + parseFloat(valor2.replace(",", "."));
      let resultadoFormatado = r.toFixed(2) + '';
      setResultado(resultadoFormatado);
      Keyboard.dismiss();
    }
  }
  function subtracao() {
    if (valor1 == '' || valor2 == '') {
      Alert.alert('Preencha os campos!!');
    }
    else {
      let r = parseFloat(valor1.replace(",", ".")) - parseFloat(valor2.replace(",", "."));
      let resultadoFormatado = r.toFixed(2) + '';
      setResultado(resultadoFormatado);
      Keyboard.dismiss();
    }
  }
  function multiplicacao() {
    if (valor1 == '' || valor2 == '') {
      Alert.alert('Preencha os campos!!');
    }
    else {
      let r = parseFloat(valor1.replace(",", ".")) * parseFloat(valor2.replace(",", "."));
      let resultadoFormatado = r.toFixed(2) + '';
      setResultado(resultadoFormatado);
      Keyboard.dismiss();
    }
  }
  function divisao() {
    if (valor1 == '' || valor2 == '') {
      Alert.alert('Preencha os campos!!');
    }
    else {
      let r = parseFloat(valor1.replace(",", ".")) / parseFloat(valor2.replace(",", "."));
      let resultadoFormatado = r.toFixed(2) + '';
      setResultado(resultadoFormatado);
      Keyboard.dismiss();
    }
  }
  function exponenciacao() {
    if (valor1 == '' || valor2 == '') {
      Alert.alert('Preencha os campos!!');
    }
    else {
      let r = parseFloat(valor1.replace(",", ".")) ** parseFloat(valor2.replace(",", "."));
      let resultadoFormatado = r.toFixed(2) + '';
      setResultado(resultadoFormatado);
      Keyboard.dismiss();
    }
  }
  function limpar() {
    setValor1('');  // Definindo como string vazia
    setValor2('');  // Definindo como string vazia
    setResultado('');  // Definindo como string vazia
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.titulo}>Programa SOMA</Text>
        <Image
          source={require('./assets/business-color_calculator_icon-icons.com_53466.png')} />
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.valor}>Valor 1</Text>
          <TextInput style={styles.textInput}
            value={valor1}
            keyboardType="decimal-pad"
            onChangeText={(text) => setValor1(text)} textchanged
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.valor}>Valor 2</Text>
          <TextInput style={styles.textInput}
            value={valor2}
            keyboardType="decimal-pad"
            onChangeText={(text) => setValor2(text)} textchanged
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View>
          <TouchableOpacity
            onPress={() => somar()}
            style={styles.botaoSoma}>
            <Text style={styles.titulobotao}>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => subtracao()}
            style={styles.botaoSoma}>
            <Text style={styles.titulobotao}>-</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => multiplicacao()}
            style={styles.botaoSoma}>
            <Text style={styles.titulobotao}>x</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => divisao()}
            style={styles.botaoSoma}>
            <Text style={styles.titulobotao}>/</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => exponenciacao()}
            style={styles.botaoSoma}>
            <Text style={styles.titulobotao}>^</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <Text style={styles.resultado}>{resultado}</Text>
      <View>
          <TouchableOpacity
            onPress={() => limpar()}
            style={styles.botaoSoma}>
            <Text style={styles.titulobotao}>Limpar</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7EB',
  },
  container1: {
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  container3: {
    width: '45%',
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 55,
    borderWidth: 2,
    borderColor: 'black',
    padding: 5,
    borderRadius: 15,
  },
  valor: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 25,
  },
  textInput: {
    fontSize: 17,
    marginLeft: 18,
    marginTop: 5,
    borderBottomWidth: 2,
    borderColor: 'black',
    padding: 3,
    backgroundColor: 'white',
  },
  botaoSoma: {
    marginTop: 50,
    alignItems: 'center',
  },
  titulobotao: {
    borderColor: '#000',
    borderWidth: 2,
    paddingHorizontal: 30,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: '#D3D3D3',
    color: '#000',
  },
  resultado: {
    fontSize: 30,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 30,

  }
});
