import React from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Notfications/Message";
import { useState } from "react";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={17} mb={2}>
        REVIEW
      </Heading>
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={17} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={17}>
          Jan 12 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={17}
          children={
            "There's a dessert that transcends all boundaries, captivating hearts and palates alike - the exquisite Chocolate Cake."
          }
        />
      </Box>
    </Box>
  );
}
