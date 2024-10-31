import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../color";

function RegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [storedData, setStoredData] = useState([]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSignUp = async () => {
    try {
      const currentData = [...storedData];
      const newRegisteredData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      currentData.push(newRegisteredData);

      await AsyncStorage.setItem("allUserData", JSON.stringify(currentData));
      setStoredData(currentData);

      navigation.navigate("Bottom");
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("allUserData");
        if (jsonValue !== null) {
          setStoredData(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };

    getData();
  }, []);

  const displayAllData = () => {
    console.log("Stored Data:", storedData);
  };

  useEffect(() => {
    displayAllData(); // Gọi hàm hiển thị dữ liệu khi storedData thay đổi
  }, [storedData]);

  //xóa
  const handleClearData = async () => {
    try {
      await AsyncStorage.clear();
      setStoredData([]); 
      console.log("All data cleared!");
    } catch (error) {
      console.error("Error clearing data:", error);
    }
  };
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading size="xl">SIGN UP</Heading>
        <VStack space={8} pt="6">
          {/* USERNAME */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={30} color={Colors.main} />
            }
            variant="underlined"
            placeholder="NGUYEN VAN A"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            style={{ fontSize: 16 }}
            onChangeText={(value) => handleChange("username", value)}
          />
          {/* EMAIL */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={30} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            style={{ fontSize: 16 }}
            onChangeText={(value) => handleChange("email", value)}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={30} color={Colors.main} />
            }
            variant="underlined"
            placeholder="**********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
            style={{ fontSize: 16 }}
            onChangeText={(value) => handleChange("password", value)}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={handleSignUp}
          size="lg"
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray} fontSize={20}>
            LOGIN
          </Text>
        </Pressable>

        {/*<Button
          _pressed={{
            bg: Colors.red, 
          }}
          my={10}
          w="40%"
          rounded={50}
          bg={Colors.red}
          onPress={handleClearData}
          size="lg"
        >
          CLEAR ALL DATA
        </Button>*/}

        {/* Hiển thị dữ liệu */}
        {/* <VStack space={2}>
          <Text>All Stored Data:</Text>
          {Array.isArray(storedData) && storedData.length > 0 ? (
            storedData.map((data, index) => (
              <Text key={index}>{JSON.stringify(data)}</Text>
            ))
          ) : (
            <Text>No stored data found</Text>
          )}
        </VStack>*/}
      </Box>
    </Box>
  );
}

export default RegisterScreen;
