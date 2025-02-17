import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useListStore } from "../../store/useListStore";

type Item = {
  id: string;
  name: string;
};

const SavedItemsScreen = () => {
  const items = useListStore((state) => state.items); // Get items from Zustand

  return (
    <View style={styles.container}>
      <Text style={styles.savedTitle}>Saved Items:</Text>
      {items.length > 0 ? (
        items.map((item) => (
          <Text key={item.id}>{item.name}</Text> // Render the "name" property
        ))
      ) : (
        <Text>No items found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  savedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  savedItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SavedItemsScreen;