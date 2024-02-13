import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import CardItem from "./src/components/CardItem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./src/screens/Home/Home";
import { getAllItem } from "./src/api/items";
import Login from "./src/screens/Profile/Login";
import Signup from "./src/screens/Profile/Signup";
import AuthNavigation from "./src/navigation/profile/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/navigation/home/HomeNavigation";
import MainNavigation from "./src/navigation/MainNavigation";
import UserContext from "./src/context/UserContext";

export default function App() {
  const [user, setUser] = useState(false);
  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setUser(true);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserContext.Provider value={[user, setUser]}>
        <NavigationContainer>
          {user ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
