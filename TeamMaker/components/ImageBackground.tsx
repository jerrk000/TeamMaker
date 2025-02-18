import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ImageSourcePropType } from 'react-native';

interface BackgroundProps {
  children: React.ReactNode;
}

const BackgroundPicture: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/images/volleyball_court.png')}
      style={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a semi-transparent overlay
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BackgroundPicture;