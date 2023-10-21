import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import ProfileScreen from "../components/ProfileScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={HomeScreen} />
      <Tab.Screen name="Screen2" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
