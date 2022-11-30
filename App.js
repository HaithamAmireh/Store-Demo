import { useState, useEffect } from "react";
import { Text, View, Image, FlatList } from "react-native";

export default function App() {
  const [productsData, setproductsData] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setproductsData(result);
      });
  });
  return (
    <View className="mt-8 p-4 items-center justify-center">
      <FlatList
        data={productsData}
        renderItem={(itemData) => {
          return (
            <View className="border-4 border-black p-4 my-2">
              <View className="flex-row my-2">
                <Image
                  className="w-40 h-40 border-2 overflow-hidden"
                  source={{
                    uri: `${itemData.item.image}`,
                  }}
                ></Image>
                <View className="p-2 w-40 border-b-black border-b">
                  <Text className="font-bold text-left w-40 text-xs">
                    {itemData.item.title}
                  </Text>
                  <View className="justify-evenly items-center p-4">
                    <Text>${itemData.item.price}</Text>
                    <Text className="mx-2">{itemData.item.rating.rate}/5</Text>
                    <Text className>{itemData.item.rating.count} ratings</Text>
                  </View>
                </View>
              </View>
              <Text key={itemData.item.id}>{itemData.item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
