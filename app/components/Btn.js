import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

export default function MainScreen({ func, type, name, size }) {
  const [touchedBtn, setTouchedBtn] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => func()}
      onPressIn={() => setTouchedBtn(true)}
      onPressOut={() => setTouchedBtn(false)}
    >
      <View style={touchedBtn ? styles.btnPressed : styles.btn}>
        <Text>{name}</Text>
        <Icon type={type} name={name} size={size} touched={touchedBtn} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  btnPressed: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#9665CE",
  },
});
