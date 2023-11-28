import React from "react";
import { View, Text } from "react-native";

const Flex2 = () => {
  return (
    <View
      style={{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        flexDirection: "column",
        padding: 20,
      }}
    >
      <View
        style={{

          width:100,
          height:100,
          backgroundColor: "red",
   
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
         
          backgroundColor: "orange",
          width:100,
          height:100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          width:100,
          height:100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
    </View>
  );
};

export default Flex2;
