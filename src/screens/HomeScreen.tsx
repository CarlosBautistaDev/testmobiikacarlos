import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchProducts } from "../api/fetchProducts";
import { setProducts, setLoading, setError } from "../store/productsSlice";
import { RootState } from "../store/store";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import styled from "styled-components/native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<string | undefined>("asc");

  const { data, isLoading, isError, refetch } = useQuery(
    ["products", sortOrder],
    () => fetchProducts(sortOrder)
  );

  useEffect(() => {
    const loadProductsFromStorage = async () => {
      const storedProducts = await AsyncStorage.getItem('products');
      if (storedProducts) {
        dispatch(setProducts(JSON.parse(storedProducts)));
      }
    };

    loadProductsFromStorage();

    if (data) {
      dispatch(setProducts(data));
    }
    dispatch(setLoading(isLoading));
    if (isError) {
      dispatch(setError("Error fetching products"));
    }
  }, [data, isLoading, isError, dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    refetch();
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StyledButton onPress={handleSort}>
        <ButtonText>
          {sortOrder === "desc" ? "Sort Ascending" : "Sort Descending"}
        </ButtonText>
      </StyledButton>
      {status === "loading" && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem
            product={{
              id: item.id,
              title: item.title,
              description: item.description ?? "",
              category: item.category ?? "",
              image: item.image ?? "",
              rating: item.rating,
              price: item.price,
            }}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          />
        )}
      />
      <StyledButton onPress={() => navigation.navigate("AddProduct")}>
        <ButtonText>Add Product</ButtonText>
      </StyledButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

const StyledButton = styled.TouchableOpacity`
  background-color: #16661fd7;
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

export default HomeScreen;