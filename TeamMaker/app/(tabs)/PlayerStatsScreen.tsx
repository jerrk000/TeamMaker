import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {RadarChart} from '@salmonco/react-native-radar-chart'; 
//It sucks that I have to use a radar chart from a random person
//TODO maybe implement radar chart yourself?


const PlayerStatsScreen = () => {
  const data = [
    {label: 'Speed', value: 30},
    {label: 'Fun', value: 55},
    {label: 'Height', value: 70},
    {label: 'Effort', value: 35},
    {label: 'Test1', value: 10},
    {label: 'data6', value: 60},
    {label: 'data7', value: 38},
    {label: 'data8', value: 65},
  ];


  return (
    <SafeAreaView style={styles.container}>
      <RadarChart
        data={data}
        maxValue={100}
        gradientColor={{
          startColor: '#FF9432',
          endColor: '#FFF8F1',
          count: 5,
        }}
        stroke={['#FFE8D3', '#FFE8D3', '#FFE8D3', '#FFE8D3', '#ff9532']}
        strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
        strokeOpacity={[1, 1, 1, 1, 0.13]}
        labelColor="#433D3A"
        dataFillColor="#FF9432"
        dataFillOpacity={0.8}
        dataStroke="salmon"
        dataStrokeWidth={2}
        //isCircle
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default PlayerStatsScreen;
