import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'


const Welcome = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView style={st.constainer}>
      <Image source={require('./image/fpoly.jpg')} style={st.image} />
      <View style={st.info}>
        <Text style={st.textInfo}>Họ và Tên: Chao Lao Lo</Text>
        <Text style={st.textInfo}>MSSV: PH45308</Text>
        <Text style={st.textInfo}>Lớp: MD18402</Text>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const st = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: '60%',
    height: 156,
    resizeMode: 'center',
    borderRadius: 20
  },
  info: {
    width: '60%',
    marginTop: 50
  },
  textInfo: {
    marginVertical: 4,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  }
})