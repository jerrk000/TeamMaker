import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useListStore } from "../../store/useListStore";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


type Item = {
  id: string;
  name: string;
};

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
  { id: '13', name: 'Markus Aurelius Dominikus' },
  { id: '14', name: 'Maximilian Baximilian Raximus' },
  { id: '15', name: 'Servus Versus Cersus' },
];

const HomeScreen = () => {
  const router = useRouter();
  const setItems = useListStore((state) => state.setItems);
  const [data, setData] = useState<Item[]>([
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
    { id: '13', name: 'Markus Aurelius Dominikus' },
    { id: '14', name: 'Maximilian Baximilian Raximus' },
    { id: '15', name: 'Servus Versus Cersus' },
  ]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>(() => {
    // Initialize with the item that has id=1 //TODO change this to their own user
    const initialItem = data.find(item => item.id === '1'); 
    return initialItem ? [initialItem] : [];
  });
  const [inputName, setInputName] = useState('');


  

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredData(data);
  };

  const handleItemPress = (item: Item) => {
    if (!selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems([...selectedItems, item]); //add item if not already selected
    }
    else {
      handleRemoveItem(item); //delete item if it was already selected
    }
  };

  const handleRemoveItem = (item: Item) => {
    const updatedItems = selectedItems.filter((selected) => selected.id !== item.id);
    setSelectedItems(updatedItems);
  };

  const handleAddItem = () => {
    if (inputName.trim()) {
      const newItem: Item = {
        id: String(data.length + 1),
        name: inputName,
      };
      setData([...data, newItem]);
      setInputName('');
    }
  };

  const handleClearSelectedItems = () => {
    setSelectedItems([]);
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
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.buttonRow}>
          <Button title="Clear Selected Items" onPress={handleClearSelectedItems} />
          <Button title="Add Item" onPress={handleAddItem} />
        </View>
        <TextInput
          style={styles.newplayerinput}
          placeholder="Enter a name"
          value={inputName}
          onChangeText={setInputName}
        />
        <FlatList
          data={filteredData.length > 0 ? filteredData : data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <View style={[
                styles.item,
                isItemSelected(item) ? styles.clickedItem : styles.noclickedItem
              ]}>
                <Text>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.selectedTitle}>Selected Items: {selectedItems.length}</Text>
          <FlatList
            data={selectedItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.selectedItem}>
                <Text style={styles.playerlistitemtext}
                numberOfLines={1} 
                ellipsizeMode="tail">
                  {item.name}</Text>
                <TouchableOpacity onPress={() => handleRemoveItem(item)}>
                  <Text 
                  style={styles.cross}>❌</Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={3}
            columnWrapperStyle={selectedItems.length === 1 ? { justifyContent: "center" } : {}}
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
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  clearButton: {
    height: 40,
    marginLeft: 10,
    padding: 5,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  clearButtonText: {
    fontSize: 16,
    color: 'red',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  clickedItem: {
    backgroundColor: '#C8E6C9',
  },
  noclickedItem: {
    borderBottomColor: '#ccc', //unneeded, because already in item, but maybe customized later?
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
    maxWidth: 90,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  newplayerinput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default HomeScreen;