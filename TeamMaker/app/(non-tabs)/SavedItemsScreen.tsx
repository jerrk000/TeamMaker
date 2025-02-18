import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useListStore } from "../../store/useListStore";
import BackgroundPicture from '@/components/ImageBackground';

type Item = {
  id: string;
  name: string;
};

const SavedItemsScreen = () => {
  const items = useListStore((state) => state.items); // Get items from Zustand
  const setItems = useListStore((state) => state.setItems); // Get setItems function from Zustand
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

  // Split the items into two groups
  const half = Math.ceil(items.length / 2);
  const firstGroup = items.slice(0, half);
  const secondGroup = items.slice(half);

  // Function to randomize items
  const randomizeItems = () => {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffledItems); // Update the Zustand store with shuffled items
  };


  const renderItemUpper = ({ item }: { item: Item }) => ( //crimson red
    <View style={[styles.item, {borderColor: "#DC143C"}]}> 
      <Text style={[styles.text, {color: "#DC143C"}]}>{item.name}</Text> {/* Assuming each item has a 'name' property */}
    </View>
  );

  // Render item for FlatList
  const renderItemLower = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text> {/* Assuming each item has a 'name' property */}
    </View>
  );

  return (
    <BackgroundPicture>
      <View style={styles.container}>
        {/* Upper Group */}
        <View style={styles.groupContainer}>
          <Text style={[styles.groupTitle, {color: "#DC143C"}]}>Team</Text>
          <FlatList
            data={firstGroup}
            renderItem={renderItemUpper}
            keyExtractor={(item) => item.id.toString()} // Assuming each item has an 'id'
            numColumns={3}
            contentContainerStyle={styles.flatList}
          />
        </View>
        
         {/* Additional Buttons */}
        {showAdditionalButtons && (
        <View style={styles.buttonContainer}>
          <Button
            title="This team won"
            onPress={() => alert('Additional Button 1 Pressed!')}
          />
        </View>
        )}

        {/* Randomize Button */}
        <View style={styles.buttonContainer}>
          <Button title="Randomize Items" onPress={randomizeItems} />
        </View>

        {showAdditionalButtons && (
        <View style={styles.buttonContainer}>
          <Button
            title="This team won"
            onPress={() => alert('Additional Button 2 Pressed!')}
          />
        </View>
        )}

        {/* Bottom Group */}
        <View style={styles.groupContainer}>
          <Text style={[styles.groupTitle, {color: "#3498db"}]}>Team</Text>
          <FlatList
            data={secondGroup}
            renderItem={renderItemLower}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            contentContainerStyle={styles.flatList}
          />
        </View>

        {/* Choose Winner Button */}
        <View style={styles.buttonContainer}>
          <Button title="Choose winner" onPress={() => setShowAdditionalButtons(!showAdditionalButtons)} />
        </View>
      </View>
    </BackgroundPicture>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  flatList: {
    alignItems: "center", // Ensures items are centered
  },
  groupContainer: {
    flex: 1,
    marginBottom: 16,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlignVertical: "center",
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  item: {
    width: 100,
    height: 50,
    backgroundColor: "#f9f9f9", // Light background
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2, // Border thickness
    borderColor: "#3498db", // Blue border color
    borderRadius: 10, // Rounded corners
  },
  text: {
    fontWeight: "bold",
    color: "#3498db", // Matching text color
  },
});

export default SavedItemsScreen;