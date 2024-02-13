import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BASE_URL } from "../api";

const CardItem = ({ image, name, onPress = () => {} }) => {
  return (
    <View
      style={{
        backgroundColor: "red",
        height: 200,
        width: "70%",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
      >
        <View
          style={{ width: "100%", height: "70%", backgroundColor: "yellow" }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            source={{ uri: `${BASE_URL}/${image}` }}
          />
        </View>
        <View style={{ width: "100%", height: "70%", backgroundColor: "gray" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;
