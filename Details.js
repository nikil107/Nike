import React from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Details({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.pro}>Product</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FlatList 
          data={product.images} 
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item }} 
                style={styles.image}
              />
            </View>
          )}
          horizontal 
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={styles.flatList}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price} $</Text>
          
          <View style={styles.sizesContainer}>
            <Text style={styles.ts}>Size</Text>
            {product.sizes.map((size, index) => (
              <TouchableOpacity key={index} style={styles.si}>
                <Text style={styles.size}>{size}</Text>
              </TouchableOpacity>            ))}
          </View>
          <Text style={styles.des}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.add}>
          <Text style={styles.cart}>Add Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  flatList: {
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: width * 0.98,
    height: height * 0.4,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    paddingTop: 10,
  },
  price: {
    fontSize: 24,
    fontFamily: 'monospace',
  },
  sizesContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginVertical: 10,
  },
  size: {
    fontSize: 18,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: 'monospace',
  },
  si: {
    borderWidth: 2,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  ts: {
    marginRight: 10,
    alignSelf: 'center',
  },
  des: {
    fontFamily: 'monospace',
    fontSize: 28,
    marginVertical: 10,
  },
  content: {
    marginLeft: 10,
  },
  footer: {
    paddingBottom: 20,
  },
  add: {
    width: '90%',
    backgroundColor: 'black',
    height: height * 0.06,
    borderRadius: 20,
    alignSelf: 'center',
  },
  cart: {
    color: 'white',
    textAlign: 'center',
    lineHeight: height * 0.06,
  },
  pro:{
    fontSize:40,
    marginTop:35,
    marginBottom:10,
    textAlign:'center'
  },
});
