import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import CardDetail from "../../screens/Home/CardDetail";
import ROUTES from "..";
import Test from "../../screens/Home/Test";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME_NAVIGATION.HOME} component={Home} />
      <Stack.Screen
        name={ROUTES.HOME_NAVIGATION.CARD_DETAIL}
        component={CardDetail}
      />
      <Stack.Screen name={ROUTES.HOME_NAVIGATION.TEST} component={Test} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
