import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CartListItem from './Asset Bundle/code/components/CartListItem';

const DATA = [
  {
    product: {
      id: "1",
      image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
      name: "Wild Berry",
      price: 160,
    },
    size: 42,
    quantity: 2,
  },
  {
    product: {
      id: "2",
      image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2.png",
      name: "Air Force 1",
      price: 169,
    },
    size: 43,
    quantity: 1,
  },
  {
    product: {
      id: "3",
      image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike3.png",
      name: "Nike Cosmic",
      price: 129,
    },
    size: 44,
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(DATA);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.product.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const renderCartItem = ({ item }) => (
    <CartListItem
      cartItem={item}
      increaseQuantity={() => increaseQuantity(item.product.id)}
      decreaseQuantity={() => decreaseQuantity(item.product.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.product.id}
      />
      <Text style={styles.total}>
        Total: ${cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)}
      </Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Checkout</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ShoppingCart;
