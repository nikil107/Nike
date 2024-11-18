import React, { useState } from 'react';
import { FlatList, StyleSheet, Dimensions, View, Image, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import products from './Asset Bundle/code/data/products';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const categories = ['All', 'Sneakers', 'Apparel', 'Accessories'];

const featuredProduct = {
  image: 'https://example.com/featured-product.jpg',
  title: 'Featured Product',
};

export default function Home() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const handlePress = (item) => {
    navigation.navigate('Details', { product: item });
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category); 
    if (category === 'All') {
      navigation.navigate('Home'); 
    } else if (category === 'Sneakers') {
      navigation.navigate('Sneakers'); 
    } else if (category === 'Apparel') {
      navigation.navigate('Apparel'); 
    } else if (category === 'Accessories') {
      navigation.navigate('Accessories');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={24} color="#000" />
        </TouchableOpacity>

        <Image source={{ uri: 'https://cdn.dribbble.com/users/3876722/screenshots/9323247/image.png' }} style={styles.featuredImage} />

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-cart" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <TextInput placeholder='Search' placeholderTextColor='black' style={styles.search} />

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredTitle}>{featuredProduct.title}</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.activeCategoryButton
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.activeCategoryText
              ]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={products}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item)}>
              <Image source={{ uri: item.image }} style={styles.images} resizeMode="cover" />
            </TouchableOpacity>
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: height * 0.02,
  },
  iconContainer: {
    padding: 10,
  },
  featuredImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 10,
  },
  search: {
    backgroundColor: '#C0C0C0',
    height: height * 0.05,
    borderRadius: 25,
    marginBottom: height * 0.05,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'left',
  },
  scrollContainer: {
    flex: 1,
  },
  featuredContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FF5E00',
    borderRadius: 25,
    marginHorizontal: 5,
  },
  activeCategoryButton: {
    backgroundColor: '#FF5E00',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  activeCategoryText: {
    color: '#fff',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    aspectRatio: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF5E00',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
