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
import React from "react";
import Colors from "../color";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

function LoginScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        //căn giữa dọc
        justifyContent="center"
      >
        <Heading size="xl">LOGIN</Heading>
        <VStack space={8} pt="6">
          {/* EMAIL */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={30} color={Colors.main} />
            }
            // tạo vạch dưới
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
            style={{ fontSize: 16 }}
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
          onPress={() => navigation.navigate("Bottom")}
          size="lg"
        >
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.deepestGray} fontSize={20}>
            SIGN UP
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
