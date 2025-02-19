import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useListStore } from "../../store/useListStore";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


type Item = {
  id: string;
  name: string;
};

const HomeScreen = () => {
  const router = useRouter();
  const setItems = useListStore((state) => state.setItems);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const data: Item[] = [
    { id: '1', name: 'Nikolaus' },
    { id: '2', name: 'Silvester' },
    { id: '3', name: 'David' },
    { id: '4', name: 'Lukas' },
    { id: '5', name: 'Anton' },
    { id: '6', name: 'Maria' },
    { id: '7', name: 'Josef' },
    { id: '8', name: 'Mario' },
    { id: '9', name: 'Simon' },
    { id: '10', name: 'Markus' },
    { id: '11', name: 'Bernd' },
    { id: '12', name: 'Maximilian' },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleItemPress = (item: Item) => {
    if (!selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemoveItem = (item: Item) => {
    const updatedItems = selectedItems.filter((selected) => selected.id !== item.id);
    setSelectedItems(updatedItems);
  };

  const isItemSelected = (item: Item) => {
    return selectedItems.some((selected) => selected.id === item.id);
  };

  const handleSave = () => {
    setItems(selectedItems); // Store the list in Zustand
    router.push({
      pathname: '/(non-tabs)/MakeTeamsScreen',
      //params: { selectedItems: JSON.stringify(selectedItems) },
    });
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.item}>
              <Text>
                {item.name} {isItemSelected(item) && '✔️'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.selectedTitle}>Selected Items:</Text>
      <FlatList
        data={selectedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.selectedItem}>
            <Text style={styles.playerlistitemtext}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Text style={styles.cross}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={3}
        contentContainerStyle={styles.playernameflatList}
      />
      <Button title="Save Selected Items" onPress={handleSave} />
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  selectedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f9f9f9',
    margin: 5,
    borderWidth: 2, // Border thickness
    borderColor: "#3498db", // Blue border color
    borderRadius: 10, // Rounded corners
  },
  cross: {
    fontSize: 16,
    color: 'red',
  },
  playernameflatList: {
    alignItems: "center", // Ensures items are centered
  },
  playerlistitemcontainer: {
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
  playerlistitemtext: {
    fontWeight: "bold",
    color: "#3498db", // Blue
  },
});

export default HomeScreen;