import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
// import MyHeader from './src/components/MyHeader';
// import MyBackButton from './src/components/MyBackButton';

// function MyBackButton({onPress}) {
//   return (
//     <TouchableOpacity style={{width: 30}} onPress={onPress}>
//       <Icon name="doubleleft" size={30} color="#900" />
//     </TouchableOpacity>
//   );
// }

// function MyHeader({title, leftButton: LeftButton, style}) {
//   return (
//     <View style={style}>
//       <LeftButton />
//       <Text>{title}</Text>
//     </View>
//   );
// }

const Router = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        headerStyle
        screenOptions={({navigation, route}) => ({
          headerStyle: {
            height: 40,
            backgroundColor: 'pink',
          },
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{width: 50, backgroundColor: 'pink'}}
                onPress={() => navigation.goBack()}>
                <Icon name="doubleleft" size={30} color="#900" />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{width: 50, backgroundColor: 'pink'}}
                onPress={() => navigation.goBack()}>
                <Icon name="doubleright" size={30} color="#900" />
              </TouchableOpacity>
            );
          },
        })}>
        <Screen name="Home" component={Home} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
