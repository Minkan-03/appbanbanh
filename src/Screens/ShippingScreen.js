import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    "ENTER CITY": "",
    "ENTER COUNTRY": "",
    "ENTER POSTAL CODE": "",
    "ENTER ADDRESS": "",
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <Box flex={1} bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} py={5} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((input, index) => (
              <FormControl key={index.toString()}>
                <FormControl.Label
                  _text={{
                    fontSize: "17px",
                    fontWeight: "bold",
                  }}
                >
                  {input.label}
                </FormControl.Label>
                <Input
                  py={4}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  type={input.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderColor: Colors.main,
                  }}
                  _input={{
                    fontSize: 18,
                  }}
                  onChangeText={(value) =>
                    handleInputChange(input.label, value)
                  }
                />
              </FormControl>
            ))}
            <Buttone
              onPress={() => {
                navigation.navigate("Checkout");

                const orderedKeys = [
                  "ENTER CITY",
                  "ENTER COUNTRY",
                  "ENTER POSTAL CODE",
                  "ENTER ADDRESS",
                ];

                orderedKeys.forEach((key) => {
                  console.log(`${key}: ${formData[key]}`);
                });
              }}
              bg={Colors.main}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
