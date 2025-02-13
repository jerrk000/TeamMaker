import { Image, StyleSheet, Platform, View, Text, ImageBackground } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DataList } from "@/components/api_calls/test_api";
import SearchFilterExample from '@/components/SearchBarFilter';

export default function HomeScreen() {
  return (
    <SearchFilterExample></SearchFilterExample>
    /* //Example for making a background
    <ImageBackground
      source={require('./../../assets/images/volleyball_court.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Volleyball Court!</Text>
      </View>
    </ImageBackground>
    */
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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
