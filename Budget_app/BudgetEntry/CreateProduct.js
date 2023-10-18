import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

import { useDispatch } from "react-redux";
import { productAdd } from "../ProductStore/actions";

function CreateProduct({ navigation }) {
  const [productName, setProductName] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (productName !== "" && plannedAmount !== "" && actualAmount !== "") {
      dispatch(productAdd(productName, plannedAmount, actualAmount));

      setActualAmount("");
      setPlannedAmount("");
      setProductName("");

      Alert.alert("Product Details added");
    } else {
      Alert.alert("Please enter all fields");
    }
  };

  return (
    <ImageBackground
      source={require("../Images/bgimage.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>Budget Calculator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(product_name) => setProductName(product_name)}
          value={productName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Planned Amount:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(planned_amount) => setPlannedAmount(planned_amount)}
          keyboardType="numeric"
          value={plannedAmount}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Actual Amount:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(actual_Amount) => setActualAmount(actual_Amount)}
          keyboardType="numeric"
          value={actualAmount}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Products")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>All Products</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 36,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  inputContainer: {
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 24,
    color: "black",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: "#97CEEB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
  footer: {
    position: "absolute",
    bottom: 10,
    fontSize: 16,
    color: "black",
  },
});

export default CreateProduct;
