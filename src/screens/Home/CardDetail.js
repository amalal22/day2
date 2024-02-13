import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getItemById } from "../../api/items";

const CardDetail = () => {
  const route = useRoute();
  const { _id, name } = route.params;
  useQuery({
    queryKey: ["items_", _id],
    queryFn: () => getItemById(_id),
  });
  return (
    <View>
      <Text>CardDetail</Text>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({});
