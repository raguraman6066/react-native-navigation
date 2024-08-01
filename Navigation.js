import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const FirstScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.replace("Second Screen");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        First page
      </Text>

      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <Text>Go to second page</Text>
      </Pressable>
    </View>
  );
};

const SecondScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("First Screen");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Second page
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#ddd" : "#0f0",
        })}
      >
        <Text>Go to First page</Text>
      </Pressable>
    </View>
  );
};

const Stack = createStackNavigator();
export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Screen" component={FirstScreen} />
        <Stack.Screen
          name="Second Screen"
          component={SecondScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
