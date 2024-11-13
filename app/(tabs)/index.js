import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import flashcards from "./flashcards";

const TabIcon = ({ name, color,content }) => {
  return (
    <View style={styles.iconContainer}>
      <Ionicons name={name} size={24} color={color} />
      <Text style={{ color }}>{content.charAt(0).toUpperCase() + content.slice(1)}</Text>
    </View>
  );
};

function App() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="homescreen"
        options={{
          title: "Cuisine",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="restaurant" content = "restaurant" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="splashscreen"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="home" content = "home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="flashcards"
        options={{
          title: "Flashcards",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="book" content = "flashcards" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
  },
});

export default App;

