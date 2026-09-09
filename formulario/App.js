import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, CheckBox } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [Nome, setNome] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Email, setEmail] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [profissao, setProfissao] = useState('Front-End');

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.Image}>
          <Image
            style={styles.imagem}
            source={require('./assets/bigchungus.jpg')}
          />
        </View>

        <View style={styles.container1}>

          <Text style={styles.exibicao}>
            Dados Pessoais
          </Text>

          <TextInput
            style={styles.caixa}
            placeholder="Digite seu Nome..."
            value={Nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.caixa}
            placeholder="Digite seu Telefone..."
            value={Telefone}
            onChangeText={setTelefone}
          />

          <TextInput
            style={styles.caixa}
            placeholder="Digite seu Endereço..."
            value={Endereco}
            onChangeText={setEndereco}
          />

          <TextInput
            style={styles.caixa}
            placeholder="Digite seu Email..."
            value={Email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

        </View>

        <View style={styles.container2}>

          <Text style={styles.exibicao}>
            Outras Informações
          </Text>

          <Picker
            style={styles.picker}
            selectedValue={profissao}
            onValueChange={(itemValue) => setProfissao(itemValue)}
          >
            <Picker.Item
              label="Programador Front-End"
              value="Front-End"
            />

            <Picker.Item
              label="Programador Back-End"
              value="Back-End"
            />

            <Picker.Item
              label="Programador Full-Stack"
              value="Full-Stack"
            />
          </Picker>

          <View style={styles.termos}>

            <CheckBox
              value={aceitouTermos}
              onValueChange={setAceitouTermos}
            />

            <Text style={styles.termosText}>
              Aceitar os Termos de Serviço
            </Text>

          </View>

        </View>

        <View style={styles.container3}>

          <Text style={styles.text}>
            Nome: {Nome}
          </Text>

          <Text style={styles.text}>
            Telefone 📞: {Telefone}
          </Text>

          <Text style={styles.text}>
            Endereço 🏡: {Endereco}
          </Text>

          <Text style={styles.text}>
            Email 📧: {Email}
          </Text>

          <Text style={styles.text}>
            Profissão: {profissao}
          </Text>

          <Text style={styles.text}>
            Termos aceitos: {aceitouTermos ? 'Sim' : 'Não'}
          </Text>

        </View>

      </ScrollView>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgb(228, 187, 111)',
    borderWidth: 2,
  },

  scroll: {
    padding: 10,
    paddingBottom: 20,
  },

  Image: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },

  imagem: {
    width: 110,
    height: 110,
    borderRadius: 75,
  },

  container1: {
  
    backgroundColor: 'rgb(223, 231, 174)',
    padding: 6,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 15,
  },

  container2: {
    backgroundColor: 'rgb(223, 231, 174)',
    padding: 8,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 15,
  },

  container3: {
    backgroundColor: 'rgb(223, 231, 174)',
    padding: 1,
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 15,
  },

  caixa: {
    borderWidth: 2,
    margin: 5,
    padding: 5,
    height: 30,
    borderRadius: 7,
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 1,
    padding: 8,
  },

  exibicao: {
    fontSize: 15,
    margin: 5,
    height: 15
  },

  termos: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },

  termosText: {
    paddingHorizontal: 6,
  },

  picker: {
    borderWidth: 2,
    margin: 5,
    padding: 6,
    height: 40,
    backgroundColor: 'rgb(223, 231, 174)',
    borderRadius: 10,
  },

});