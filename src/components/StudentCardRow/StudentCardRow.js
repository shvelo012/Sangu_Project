import React from "react";
import { View, Text } from "react-native";

const StudentCardRow = ({ credits, name, result, score, state }) => {

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* <Text >{credits}</Text> */}
      <Text >{name}</Text>
      <Text > {score}   {state !== 'current' ? '(' + result + ')' : null} </Text>
    </View>
  );

};
export default StudentCardRow;
