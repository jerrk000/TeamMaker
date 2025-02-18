import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useListStore } from "../../store/useListStore";
import BackgroundPicture from '@/components/ImageBackground';

type Item = {
  id: string;
  name: string;
};

const SavedItemsScreen = () => {
  const items = useListStore((state) => state.items); // Get items from Zustand

  // Split the items into two groups
  const half = Math.ceil(items.length / 2);
  const firstGroup = items.slice(0, half);
  const secondGroup = items.slice(half);

  // Render item for FlatList
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text> {/* Assuming each item has a 'name' property */}
    </View>
  );

  return (
    <BackgroundPicture>
      <View style={styles.container}>
        {/* Upper Group */}
        <View style={styles.groupContainer}>
          <Text style={styles.groupTitle}>Group 1</Text>
          <FlatList
            data={firstGroup}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()} // Assuming each item has an 'id'
          />
        </View>

        {/* Bottom Group */}
        <View style={styles.groupContainer}>
          <Text style={styles.groupTitle}>Group 2</Text>
          <FlatList
            data={secondGroup}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </BackgroundPicture>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  groupContainer: {
    flex: 1,
    marginBottom: 16,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SavedItemsScreen;