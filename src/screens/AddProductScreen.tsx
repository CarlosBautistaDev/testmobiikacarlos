import React, { useState } from 'react';
import {  Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';
import styled from 'styled-components/native';
import { addProductToAPI } from '../api/addProduct';

const AddProductScreen = ({ navigation }: { navigation: any }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = async () => {
    if (title && price && description && category && image) {
      const newProduct = {
        title,
        price: parseFloat(price),
        description,
        category,
        image,
       
      };

      try {
        const savedProduct = await addProductToAPI(newProduct);

        dispatch(addProduct(savedProduct));
        Alert.alert('Success', 'Product added successfully');
        navigation.goBack();
      } catch (error) {
        console.error('Error in handleAddProduct:', error);
      }
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <Container>
      <Title>Add New Product</Title>
      <Input
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <Input
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Input
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Input
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Input
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <StyledButton onPress={handleAddProduct}>
        <ButtonText>Add Product</ButtonText>
      </StyledButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  height: 40px;
  border-color: #ccc;
  border-width: 1px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #6200ee;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export default AddProductScreen;