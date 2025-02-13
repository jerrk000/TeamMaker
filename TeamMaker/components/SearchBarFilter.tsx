import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Define the type for the data items
type Item = {
  id: string;
  name: string;
};

const SearchFilterExample = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  // Sample data
  const data: Item[] = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' },
    { id: '4', name: 'Date' },
    { id: '5', name: 'Elderberry' },
    { id: '6', name: 'Fig' },
    { id: '7', name: 'Grape' },
    { id: '8', name: 'Honeydew' },
  ];

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Handle item selection
  const handleItemPress = (item: Item) => {
    // Check if the item is already selected
    if (!selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Handle item removal from selected items
  const handleRemoveItem = (item: Item) => {
    const updatedItems = selectedItems.filter((selected) => selected.id !== item.id);
    setSelectedItems(updatedItems);
  };

  // Check if an item is selected
  const isItemSelected = (item: Item) => {
    return selectedItems.some((selected) => selected.id === item.id);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* List of Filtered Items */}
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

      {/* List of Selected Items */}
      <Text style={styles.selectedTitle}>Selected Items:</Text>
      <FlatList
        data={selectedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.selectedItem}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Text style={styles.cross}>❌</Text>
            </TouchableOpacity>
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
  },
  cross: {
    fontSize: 16,
    color: 'red',
  },
});

export default SearchFilterExample;