import React, { useState, useEffect } from "react";
import { ScrollView, VStack, Input, FormControl, Button } from "native-base";
import * as FileSystem from "expo-file-system";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
    key: "username",
  },
  {
    label: "EMAIL",
    type: "text",
    key: "email",
  },
  {
    label: "NEW PASSWORD",
    type: "password",
    key: "newPassword",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
    key: "confirmPassword",
  },
];

const Profile = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSave = async () => {
    try {
      const filePath = `${FileSystem.documentDirectory}/profileData.json`;
      let existingData = [];
      const fileExists = await FileSystem.getInfoAsync(filePath);
      if (fileExists.exists) {
        const jsonData = await FileSystem.readAsStringAsync(filePath);
        existingData = JSON.parse(jsonData);
      }

      existingData.push(formData);

      const updatedJsonData = JSON.stringify(existingData);
      await FileSystem.writeAsStringAsync(filePath, updatedJsonData);
      console.log(
        "Dữ liệu đã được lưu vào tệp profileData.json:",
        updatedJsonData
      );
    } catch (error) {
      console.error("Lỗi khi lưu trữ dữ liệu:", error);
    }
  };

  const fetchDataFromStorage = async () => {
    try {
      const filePath = `${FileSystem.documentDirectory}/profileData.json`;
      const fileExists = await FileSystem.getInfoAsync(filePath);
      if (fileExists.exists) {
        const jsonData = await FileSystem.readAsStringAsync(filePath);
        console.log("Dữ liệu từ tệp profileData.json:", JSON.parse(jsonData));
      } else {
        console.log("Không có dữ liệu nào được lưu trữ");
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ tệp profileData.json:", error);
    }
  };

  const handleDeleteData = async () => {
    try {
      const filePath = `${FileSystem.documentDirectory}/profileData.json`;
      await FileSystem.deleteAsync(filePath);
      console.log("Đã xóa toàn bộ dữ liệu từ tệp profileData.json");
    } catch (error) {
      console.error("Lỗi khi xóa dữ liệu:", error);
    }
  };

  useEffect(() => {
    fetchDataFromStorage();
  }, []);

  return (
    <ScrollView>
      <VStack space={4} p={4}>
        {Inputs.map((input, index) => (
          <FormControl key={index}>
            <FormControl.Label>{input.label}</FormControl.Label>
            <Input py={4}
              type={input.type}
              onChangeText={(value) => handleInputChange(input.key, value)}
            />
          </FormControl>
        ))}
        <Button p={3} onPress={handleSave}>UPDATE PROFILE</Button>
        {/*<Button onPress={fetchDataFromStorage}>FETCH PROFILE</Button>
        <Button onPress={handleDeleteData}>Xóa toàn bộ dữ liệu</Button>*/}
      </VStack>
    </ScrollView>
  );
};

export default Profile;
