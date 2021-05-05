import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Profile = ({navigation, route}) => {
  return (
    <View>
      <Text>{route.params?.username}</Text>
      <Text>{route.params?.email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('Profile')}>
        <Text style={styles.buttonText}>Profile... Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back One Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Back to First</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'grey',
    padding: 5,
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default Profile;
