import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Login from "../screens/Profile/Login";
import HomeNavigation from "./home/HomeNavigation";
import Profile from "../screens/Profile/Profile";
import ROUTES from ".";

const Tap = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tap.Navigator screenOptions={{ headerShown: false }}>
      <Tap.Screen
        name={ROUTES.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tap.Screen name={ROUTES.PROFILE_NAVIGATION.INDEX} component={Profile} />
    </Tap.Navigator>
  );
};

export default MainNavigation;
