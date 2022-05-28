/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragement, useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Alert,
  View,
  Button,
  FlatList,
  Image,
  ImageBackground,
  HorizontalFlatListItem,
  parentFlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';




function Mainpage ({navigation})     {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    },1000);
  }, [])

const backgroundStyle ={
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};
  return (
    <View style={{ flex: 1, backgroundColor: '#000000'}}>
    <ImageBackground source={require('./assets/main/main.png')} style={{ height: 300, position:'absolute', width: 300, top: 150, left: 75,}} resizeMode="cover">
      <TouchableOpacity onPress={() => navigation.navigate('United States')}>
        <Text style={{  color: 'white', fontSize: 45, fontFamily: 'BebasNeue-Regular', right: 90, padding: 40,}}>UNITED STATES</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('United Arab Emirates')}>
        <Text style={{  color: 'white', fontSize: 45, fontFamily: 'BebasNeue-Regular', right: 90, padding: 40,}}>UNITED ARAB EMRIRATES</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('South Korea')}>
        <Text style={{  color: 'white', fontSize: 45, fontFamily: 'BebasNeue-Regular', right: 90, padding: 40,}}>SOUTH KOREA</Text>
      </TouchableOpacity>
    </ImageBackground>
    </View>
  )
};

function United_States  ({navigation})  {

  const [images, setimages] = useState([
    require('./assets/Washington_DC/DC1.png'),
    require('./assets/Washington_DC/DC2.png'),
    require('./assets/Washington_DC/DC3.png'),
    require('./assets/Washington_DC/DC4.png'),
    require('./assets/Washington_DC/DC5.png'),
  ]);



  return (
    <ImageBackground source={require('./assets/Washington_DC/DC6.png')} style={{ width: '100%',}}>
      <LinearGradient colors={['#00000000', '#000000']} style={{height : '100%', width : '100%'}}>
    <Text style={{ color: 'white', fontSize: 45, fontFamily:'BebasNeue-Regular', textAlign: 'center', marginTop: 200}}>WASHINGTON, D.C.</Text>
    <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data={images}
    renderItem={ ({ item, index}) => (
      <TouchableOpacity onPress={() => navigation.navigate('Case',{param: index})}>
      <Image source={item}
      key={index}

      style={{
        width:260,
        height:300,
        borderWidth:2,
        borderColor: '#00000000',
        margin:8,
        marginTop: 150,
      }}
      />
      </TouchableOpacity>
    )}
    />
    </LinearGradient>
    </ImageBackground>
  );
};

function United_Arab_Emirates ({navigation})  {
  
  const [images, setimages] = useState([
    require('./assets/Abu_Dhabi/Abu_Dhabi1.png'),
    require('./assets/Abu_Dhabi/Abu_Dhabi2.png'),
    require('./assets/Abu_Dhabi/Abu_Dhabi3.png'),
    require('./assets/Abu_Dhabi/Abu_Dhabi4.png'),
    require('./assets/Abu_Dhabi/Abu_Dhabi5.png'),
  ]);

  return (
    <ImageBackground source={require('./assets/Abu_Dhabi/Abu_Dhabi6.png')} style={{ width: '100%',}}>
      <LinearGradient colors={['#00000000', '#000000']} style={{height: '100%', width: '100%'}}>
        <Text style={{ color: 'white', fontSize: 45, fontFamily:'BebasNeue-Regular', textAlign: 'center', marginTop: 200}}>ABU DHABI</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={ ({  item, index }) => (
          <Image source={item}
          key={index}

          style={{
            width:260,
            height: 300,
            borderWidth: 2,
            borderColor: '#00000000',
            margin: 8,
            marginTop: 150,
          }}
          />
        )}
        />
      </LinearGradient>
    </ImageBackground>
  );
};

function South_Korea  ({navigation})  {
  
  const [images, setimages] = useState([
    require('./assets/Seoul/Seoul1.png'),
    require('./assets/Seoul/Seoul2.png'),
    require('./assets/Seoul/Seoul3.png'),
    require('./assets/Seoul/Seoul4.png'),
    require('./assets/Seoul/Seoul5.png'),
  ]);

  return (
    <ImageBackground source={require('./assets/Seoul/Seoul6.png')} style={{width: '100%'}}>
      <LinearGradient colors={['#00000000', '#000000']} style={{height: '100%', width: '100%'}}>
        <Text style={{color: 'white', fontSize: 45, fontFamily: 'BebasNeue-Regular', textAlign: 'center', marginTop: 200}}>SEOUL</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        data= {images}
        renderItem={ ({ item, index }) => (
          <Image source={item}
          key={index}

          style={{
            width: 260,
            height: 300,
            borderWidth: 2,
            borderColor: "#00000000",
            margin: 8,
            marginTop: 150,

          }}
          />
        )}
        />
      </LinearGradient>
    </ImageBackground>
  );
};

  function Case ({route}) {
  const { param } = route.params;
  const index = JSON.stringify(param);
  switch (index){
    case '0':
      return Picture1(index);
    case '1':
      return Picture2(index);
    case '2':
      return Picture3(index);
    case '3':
      return Picture4(index);
    case '4':
      return Picture5(index);
  }
}; 



function Picture1 ({route}) {
  
  return (
    <Text>This is Picture1</Text>
  );
};

function Picture2 ({route}) {

  return (
   <Text>This is Picture 2</Text>
  );
};

function Picture3 ({route}) {
  return (
    <Text>This is Picture 3</Text>
  );
};
function Picture4 ({route}) {
  return (
    <Text>This is Picture 4</Text>
  );
};

function Picture5 ({route}) {
  return (
    <Text>This is Picture5</Text>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name= 'Mainpage' component={Mainpage}/>
        <Stack.Screen name ='United States' component={United_States} />
        <Stack.Screen name ='United Arab Emirates' component={United_Arab_Emirates} />
        <Stack.Screen name='South Korea' component={South_Korea} />
        <Stack.Screen name= 'Case' component={Case}/>
        <Stack.Screen name= 'Picture1' component={Picture1}/>
        <Stack.Screen name= 'Picture2' component={Picture2}/>
        <Stack.Screen name= 'Picture3' component={Picture3}/>
        <Stack.Screen name= 'Picture4' component={Picture4}/>
        <Stack.Screen name= 'Picture5' component={Picture5}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


