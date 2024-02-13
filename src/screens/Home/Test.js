import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
const Test = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Test</Text>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: "red",
        }}
      ></View>
      <Pressable
        onPress={pickImage}
        style={{ width: "100%", height: "100%", backgroundColor: "green" }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
