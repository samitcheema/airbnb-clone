/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>

      <Pressable
        style={styles.searchBarButton}
        onPress={() => console.warn('Explore Btn clicked')}>
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchBarButtonText}>Where are you headed?</Text>
      </Pressable>

      <Text style={styles.title}>Go Near</Text>

      <Pressable
        style={styles.button}
        onPress={() => console.warn('Explore Btn clicked')}>
        <Text style={styles.buttonText}>Explore nearby places</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
