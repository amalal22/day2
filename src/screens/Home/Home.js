import { View, Text, ScrollView, Button } from "react-native";
import React from "react";
import CardItem from "../../components/CardItem";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";
import { getAllItem } from "../../api/items";

const Home = () => {
  const { data, refetch } = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItem(),
  });
  // console.log(data);
  console.log("home");
  const navigation = useNavigation();
  const items = data?.map((item) => {
    return (
      <CardItem
        image={item.image}
        name={item.name}
        onPress={() => {
          console.log("test");
          navigation.navigate(ROUTES.HOME_NAVIGATION.CARD_DETAIL, {
            _id: item._id,
            name: item.name,
          });
        }}
      />
    );
  });
  return (
    <View
      style={{
        //backgroundColor: "red",
        flex: 1,
        gap: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "gray",
          flex: 15,
          gap: 20,
        }}
      >
        <Button
          title="Go to test"
          onPress={() => {
            navigation.navigate(ROUTES.HOME_NAVIGATION.TEST);
          }}
        />
        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            gap: 10,
          }}
        >
          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>1</Text>
          </View>
          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>2</Text>
          </View>
          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>4</Text>
          </View>
          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>5</Text>
          </View>
          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>6</Text>
          </View>

          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>7</Text>
          </View>
          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>8</Text>
          </View>
          <View style={{ width: 50, height: 30, backgroundColor: "white" }}>
            <Text>8</Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          // backgroundColor: "green",
          flex: 85,
          gap: 20,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          {items}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
