import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  //quản lý số lượng ng dùng mua
  const [value, setValue] = useState(0);
  // điều hướng màn hình đến màn hình giỏ hàng khi ấn nút ADD TO CART
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          mt={10}
          resizeMode="contain"
        />
        <Heading bold fontSize={20} mt={4} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              totalWidth={150}
              totalHeight={40}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          ) : (
            <Heading bold color={Colors.red} italic fontSize={17}>
              Out of stock
            </Heading>
          )}
          {/* tạo khoảng cách ngang*/}
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price}đ
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={17}>
          {product.description}
        </Text>
        <Buttone
          onPress={() => navigation.navigate("Cart")}
          bg={Colors.main}
          color={Colors.white}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        {/* REVIEW */}
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
