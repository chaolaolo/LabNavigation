import { Image, ImageBackground, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Introduce = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    // <ImageBackground source={require('./image/bgrImage.png')} style={{flex:1}}>
    <SafeAreaView style={st.constainer}>
      <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 10 }}>
        <Pressable onPress={() => setModalVisible(true)} style={{ width: '16%', margin: 10 }}>
          <Image source={require('./image/avatar.jpg')} style={st.image} />
        </Pressable>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <Pressable style={st.overlay} onPress={() => setModalVisible(false)}>
            <View style={st.modalContainer}>
              <Image source={require('./image/avatar.jpg')} style={st.fullImage} />
            </View>
          </Pressable>
        </Modal>

        <Text style={{ fontSize: 14, color: 'black', fontWeight: '500' }}>Welcome! this is your information</Text>
      </View>
      <View style={st.info}>
        <View style={{ flexDirection: 'row', width: '100%', }}>
          <Text style={st.leftTextInfo}>Họ và Tên: </Text>
          <Text style={st.textInfo}>Chao Lao Lo</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', }}>
          <Text style={st.leftTextInfo}>MSSV: </Text>
          <Text style={st.textInfo}>PH45308</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', }}>
          <Text style={st.leftTextInfo}>Lớp: </Text>
          <Text style={st.textInfo}>MD18402</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', }}>
          <Text style={st.leftTextInfo}>Trường: </Text>
          <Text style={st.textInfo}>Cao đẳng FPT Polytechnic</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', }}>
          <Text style={st.leftTextInfo}>Mô tả: </Text>
          <Text style={[st.textInfo, { paddingRight: 90, textAlign: 'justify' }]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae iusto dolores fugit, voluptates tempora. Aperiam, fuga corporis? Magnam consequatur aliquam quidem ratione minus vitae aut eaque ipsam nam. Suscipit.</Text>
        </View>
      </View>
    </SafeAreaView>
    // </ImageBackground>
  )
}

export default Introduce

const st = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: 66,
    resizeMode: 'cover',
    borderRadius: 170,
    borderWidth: 4,
    borderColor: 'lightblue',
    // alignSelf: 'center',
    // margin: 10
  },
  info: {
    width: '80%',
    marginTop: 50,
    alignSelf: 'center'
  },
  leftTextInfo: {
    marginVertical: 4,
    color: 'green',
    fontWeight: '500',
    fontSize: 16
  },
  textInfo: {
    marginVertical: 4,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height:'100%',
    alignItems: 'center',
    justifyContent:'center'
  },
  fullImage: {
    width: '80%',
    height: '90%',
    resizeMode: 'contain',
  },
})