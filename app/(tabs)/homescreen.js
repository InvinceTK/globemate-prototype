import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

 


// Data for the cuisines with emoji flags
const cuisines = [
  { name: 'China', flag: '🇨🇳' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'England', flag: '🇬🇧' },
  { name: 'Arab', flag: '🇦🇪' },
  { name: 'Japan', flag: '🇯🇵' }
];

// Data for the dishes
const dishes = [
  // India
  {
    id: '1',
    name: 'Chicken Tikka Masala',
    description: 'Tender Chicken in mixed spice gravy',
    price: '5.0',
    country: 'India',
    image: require('../../assets/dish1.png'),
  },
  {
    id: '2',
    name: 'Dosa',
    description: 'Crispy wrap with assortment of exotic sauces',
    price: '5.0',
    country: 'India',
    image: require('../../assets/dish2.png'),
  },
  {
    id: '3',
    name: 'Butter Chicken',
    description: 'Rich and creamy chicken curry',
    price: '6.0',
    country: 'India',
    image: require('../../assets/dish3.png'),  // Add your image path here
  },
  // China
  {
    id: '4',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fry with peanuts, vegetables, and chicken',
    price: '7.0',
    country: 'China',
    image: require('../../assets/dish4.png'),  // Add your image path here
  },
  {
    id: '5',
    name: 'Sweet and Sour Pork',
    description: 'Pork in sweet and tangy sauce',
    price: '6.5',
    country: 'China',
    image: require('../../assets/dish5.png'),  // Add your image path here
  },
  {
    id: '6',
    name: 'Dumplings',
    description: 'Stuffed dough with meat or vegetables',
    price: '4.5',
    country: 'China',
    image: require('../../assets/dish6.png'),  // Add your image path here
  },
  // England
  {
    id: '7',
    name: 'Fish and Chips',
    description: 'Deep-fried fish with crispy chips',
    price: '8.0',
    country: 'England',
    image: require('../../assets/dish7.png'),  // Add your image path here
  },
  {
    id: '8',
    name: 'Shepherd’s Pie',
    description: 'Savory pie with lamb and mashed potatoes',
    price: '7.5',
    country: 'England',
    image: require('../../assets/dish8.png'),  // Add your image path here
  },
  {
    id: '9',
    name: 'Yorkshire Pudding',
    description: 'Baked pudding made from batter',
    price: '3.5',
    country: 'England',
    image: require('../../assets/dish9.png'),  // Add your image path here
  },
  // Arab
  {
    id: '10',
    name: 'Hummus',
    description: 'Chickpea dip with tahini',
    price: '5.0',
    country: 'Arab',
    image: require('../../assets/dish10.png'),  // Add your image path here
  },
  {
    id: '11',
    name: 'Shawarma',
    description: 'Grilled meat wrap',
    price: '6.0',
    country: 'Arab',
    image: require('../../assets/dish11.png'),  // Add your image path here
  },
  {
    id: '12',
    name: 'Falafel',
    description: 'Deep-fried chickpea balls',
    price: '4.0',
    country: 'Arab',
    image: require('../../assets/dish12.png'),  // Add your image path here
  },
  // Japan
  {
    id: '13',
    name: 'Sushi',
    description: 'Vinegared rice with fish or vegetables',
    price: '10.0',
    country: 'Japan',
    image: require('../../assets/dish13.png'),  // Add your image path here
  },
  {
    id: '14',
    name: 'Ramen',
    description: 'Noodle soup with various toppings',
    price: '9.0',
    country: 'Japan',
    image: require('../../assets/dish14.png'),  // Add your image path here
  },
  {
    id: '15',
    name: 'Tempura',
    description: 'Battered and deep-fried vegetables or seafood',
    price: '8.5',
    country: 'Japan',
    image: require('../../assets/dish15.png'),  // Add your image path here
  },
];

const homescreen = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = dishes.filter(dish => {
    return (selectedCountry ? dish.country === selectedCountry : true) && 
           dish.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
         <Image source={require('../../assets/globemate-test.png')} style={{ width: 200, height: 50, paddingTop:50 }} /> 
         <Ionicons name="person-circle-outline" size={28} color="white" style={{paddingStart:100}} /> 
         <Ionicons name="mail" size={28} color="white" style={{paddingEnd:20}}/>
          </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search" 
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <Ionicons name="search-outline" size={20} color="#A0A0A0" style={styles.searchIcon} />
      </View>

      {/* Cuisine Selector */}
      <Text style={styles.cuisineTitle}>Explore Popular Cuisines</Text>
      <View style={styles.cuisineContainer}>
  {cuisines.map((cuisine, index) => (
    <TouchableOpacity 
      key={index} 
      style={[
        styles.cuisine, 
        selectedCountry === cuisine.name && { backgroundColor: 'black', borderRadius: 10,width:70}
      ]}
      onPress={() => setSelectedCountry(cuisine.name)}
    >
      <Text style={styles.cuisineFlag}>{cuisine.flag}</Text>
      <Text style={[
        styles.cuisineName, 
        selectedCountry === cuisine.name && { color: 'white' }
      ]}>
        {cuisine.name}
      </Text>
    </TouchableOpacity>
  ))}
</View>

      {/* Dish List */}
      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
          <View style={styles.dishCard}>
            <Image source={item.image} style={styles.dishImage} />
            
            <View style={styles.dishActions}>
              <View style={{backgroundColor:"#F79B06", borderRadius: 10}}>
              <TouchableOpacity>
                <Ionicons name="play-circle-outline" size={40} color="black" />
              </TouchableOpacity>
              </View>
              <View style={{backgroundColor:"#F79B06", borderRadius: 10}}>
              <TouchableOpacity>
                <Ionicons name="menu-outline" size={40} color="black" />
              </TouchableOpacity>
              </View>
              <View style={{backgroundColor:"#F79B06", borderRadius: 10}}>
              <TouchableOpacity>
                <Ionicons name="share-social-outline" size={40} color="black" />
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.dishInfo}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.dishDescription}>{item.description}</Text>
              <Text style={styles.dishPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

     
      
    </SafeAreaView>
  );
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 30,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#EEE',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    padding: 5,
  },
  searchIcon: {
    marginLeft: 5,
  },
  cuisineTitle: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  cuisineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  cuisine: {
    alignItems: 'center',
  },
  cuisineFlag: {
    fontSize: 30,
  },
  cuisineName: {
    fontSize: 12,
    color: '#555',
  },
  dishCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  dishImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  dishInfo: {
    flex: 1,
    marginLeft: 10,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishDescription: {
    color: '#888',
    fontSize: 12,
  },
  dishPrice: {
    marginTop: 5,
    color: '#FFA500',
    fontWeight: 'bold',
  },
  dishActions: {
    paddingStart:20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFA500',
  },
});

export default homescreen;
