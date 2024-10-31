import { Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={
            require("../data/images/userprofile.png")
          }
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={20} isTruncated my={2} color={Colors.white}>
          Admin Tiến - Khang
        </Heading>
        <Text italic fontSize={15} color={Colors.white}>
          Joined Dec 7 2003
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  );
}

export default ProfileScreen;