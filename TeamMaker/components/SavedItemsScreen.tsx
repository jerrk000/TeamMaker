import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Item = {
  id: string;
  name: string;
};

type SavedItemsScreenProps = {
  route: {
    params: {
      selectedItems: Item[];
    };
  };
};

const SavedItemsScreen = ({ route }: SavedItemsScreenProps) => {
  const { selectedItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.savedTitle}>Saved Items:</Text>
      <FlatList
        data={selectedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.savedItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
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