import { Alert, KeyboardAvoidingView, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('HomeDrawer');
    };
    if (username.length === 0 && password.length === 0) {
      setErrorMessage('Chưa nhập username và password!');
      setModalVisible(true);
      return;
    }
    if (username.length === 0) {
      setErrorMessage('Vui lòng nhập username!');
      setModalVisible(true);
      return;
    }
    if (password.length === 0) {
      setErrorMessage('Vui lòng nhập password!');
      setModalVisible(true);
      return;
    }
    if (username !== 'admin' && password !== 'admin') {
      setErrorMessage('Sai username và password!');
      setModalVisible(true);
      return;
    }
    if (username !== 'admin') {
      setErrorMessage('Sai username!');
      setModalVisible(true);
      return;
    }
    if (password !== 'admin') {
      setErrorMessage('Sai password!');
      setModalVisible(true);
      return;
    }

  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={st.container}>
        <ScrollView>
          <View style={st.boxContent}>
            <Text style={{ fontSize: 24, color: 'green', fontWeight: 'bold', marginVertical: 18 }}>Login to continue</Text>
            <TextInput
              placeholder='Username'
              style={st.tip}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              placeholder='Password'
              style={st.tip}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <Text style={st.btnLogin} onPress={() => handleLogin()}>Login</Text>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={st.modalContainer}>
            <View style={st.modalView}>
              <Text style={{ fontSize: 20, left: -80, top: -10, fontWeight: 'bold', color: 'black' }}>Lỗi !</Text>
              <Text style={st.modalText}>{errorMessage}</Text>
              <TouchableOpacity
                style={[st.button, st.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={st.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Login

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  boxContent: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 300
  },
  tip: {
    width: '100%',
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 4,
    borderRadius: 10,
    padding: 16
  },
  btnLogin: {
    backgroundColor: 'lightgreen',
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 100,
    marginVertical: 20
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    height: 200,
    width: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'lightblue',
    width: 100,
    marginTop: 20
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
})