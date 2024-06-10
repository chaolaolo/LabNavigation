import { Button, Image, StyleSheet, Text, View, FlatList, Pressable, Modal, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({ navigation }: any) => {

  const DATA = [
    { "id": 1, "name": "Product 1", "price": 10.99, "image": require("./image/image.png") },
    { "id": 2, "name": "Product 2", "price": 19.99, "image": require("./image/image.png") },
    { "id": 3, "name": "Product 3", "price": 14.5, "image": require("./image/image.png") },
    { "id": 4, "name": "Product 4", "price": 24.99, "image": require("./image/image.png") },
    { "id": 5, "name": "Product 5", "price": 8.75, "image": require("./image/image.png") },
    { "id": 6, "name": "Product 6", "price": 17.25, "image": require("./image/image.png") },
    { "id": 7, "name": "Product 7", "price": 11.99, "image": require("./image/image.png") },
    { "id": 8, "name": "Product 8", "price": 29.99, "image": require("./image/image.png") },
    { "id": 9, "name": "Product 9", "price": 16.5, "image": require("./image/image.png") },
    { "id": 10, "name": "Product 10", "price": 12.49, "image": require("./image/image.png") }
  ];


  const [data, setData] = useState(DATA);
  const [modalVisible, setModalVisible] = useState(false);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState(require('./image/image.png'));

  let number = /^\d+(\.\d+)?$/;
  const handleAddProduct = () => {
    if (newProductName.length == 0 && newProductPrice.length == 0) {
      Alert.alert('Lỗi', 'Hãy nhập tên và giá sản phẩm');
      return;
    };
    if (newProductName.length == 0) {
      Alert.alert('Lỗi', 'Hãy nhập tên sản phẩm');
      return;
    };
    if (newProductPrice.length == 0) {
      Alert.alert('Lỗi', 'Hãy nhập giá sản phẩm');
      return;
    } else if (!number.test(newProductPrice)) {
      Alert.alert('Lỗi', 'Sai định dạng, chỉ được nhập số!');
      return;
    };
    if (newProductName && newProductPrice) {
      const newProduct = {
        id: (data.length + 1).toString(),
        name: newProductName,
        price: parseFloat(newProductPrice),
        image: newProductImage,
      };
      setData([...data, newProduct]);
      setModalVisible(false);
      setNewProductName('');
      setNewProductPrice('');
    }
  };


  const renderItem = ({ item }: any) => (
    <View style={st.item}>
      <Image source={item.image} style={st.image} />

      <View style={{ flexDirection: 'row', }}>
        <View style={{ flex: 2 }}>
          <Text style={st.txtName}>{item.name}</Text>
          <Text style={st.txtPrice}>$ {item.price}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={st.btnAddToCart}>
            <Text style={{ color: 'black', textAlign: 'center', margin: 'auto' }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );


  //8888888888888888888
  return (
    <View style={st.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={{ alignContent: 'center' }}
      />
      <Text style={st.btnAddNewProduct} onPress={() => setModalVisible(true)}>+</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView style={st.modalContainer}>
          <View style={st.modalView}>
            <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold', marginBottom: 15 }}>Add New Product</Text>
            <TextInput
              placeholder="Product Name"
              style={st.tip}
              value={newProductName}
              onChangeText={setNewProductName}
            />
            <TextInput
              placeholder="Product Price"
              style={st.tip}
              value={newProductPrice}
              onChangeText={setNewProductPrice}
              keyboardType="numeric"
            />
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <Text style={[st.btnLogin, { color: 'black', textAlign: 'center', fontWeight: 'bold' }]} onPress={() => handleAddProduct()}>Add</Text>
              <Text style={[st.btnLogin, { color: 'black', textAlign: 'center', fontWeight: 'bold', backgroundColor: 'red' }]} onPress={() => setModalVisible(false)}>Cancel</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  )
}

export default Home

const st = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: '48%',
    margin: 4,
    backgroundColor: 'rgba(0,0,0,0.05)',
    paddingBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginHorizontal: 'auto',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 10
  },
  txtName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  txtPrice: {
    fontSize: 16,
    color: 'brown',
    paddingHorizontal: 10,
    fontWeight: '500'
  },
  btnAddToCart: {
    width: 60,
    height: 40,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 100,
    alignItems: 'center',
  },
  btnAddNewProduct: {
    position: 'absolute',
    backgroundColor: 'lightblue',
    width: 60,
    height: 60,
    borderRadius: 60,
    bottom: 30,
    right: 30,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: 'center',
    fontSize: 40,
    color: 'black'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
  tip: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  btnLogin: {
    backgroundColor: 'lightgreen',
    padding: 15,
    fontSize: 20,
    borderRadius: 100,
    marginVertical: 10,
    // width: '100%',
    flex: 1,
    margin: 6
  },
})