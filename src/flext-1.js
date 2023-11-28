import React from "react";
import { View, Text } from "react-native";

const Flex1 = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "orange",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
    </View>
  );
};

export default Flex1;
