import React, { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Profile from "./Profile";
import Orders from "./Orders";
import Colors from "../../color";
import { Text } from "native-base";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

export default function Tabs() {
  //để lấy thông tin về kích thước của cửa sổ hiện tại của ứng dụng.
  const layout = useWindowDimensions();
  //để quản lý trạng thái của một component.
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      //render các thuộc tính của tabbar
      {...props}
      tabStyle={styles.tabStyle}
      //   indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    //để hiển thị nội dung của các tab dựa trên trạng thái hiện tại của navigationState.
    <TabView
      // Là một đối tượng chứa thông tin về trạng thái hiện tại của navigation state,
      navigationState={{ index, routes }}
      // để render nội dung cho mỗi tab dựa trên index và routes
      renderScene={renderScene}
      // được gọi khi chỉ số tab thay đổi, thường để cập nhật trạng thái index.
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      //tọa giao diện tab bar
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
