import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import AddProduct from './Introduce';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Welcome';
import Login from './Login';
import Introduce from './Introduce';
// import { Image } from 'react-native/types';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.boxHeader}>
        <Image source={require('./image/avatar.jpg')} style={styles.imgHeader} />
        <Text style={styles.txtName}>Welcome! Chao Lao Lo</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Introduce" component={Introduce} />
    </Drawer.Navigator>

  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='HomeDrawer' component={HomeDrawer} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  boxHeader: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.04)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-6
  },
  imgHeader: {
    width: '40%',
    height: 116,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'lightblue'
  },
  txtName: {
    fontSize: 20,
    marginVertical:10,
    color:'black'
  }
})
