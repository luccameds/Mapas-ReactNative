import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MapScreen } from "./src/pages/MapScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#202020",
          },
        }}
      >
        <Tab.Screen
          name="Mapa"
          component={MapScreen}
          options={{
            tabBarLabel: "Mapa",
            tabBarLabelStyle: { color: "#FFFFFF" },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={"#FFFFFF"} size={26} />
            ),
            headerStyle: {
              backgroundColor: "#101010",
            },
            headerTintColor: "#FFFFFF",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
