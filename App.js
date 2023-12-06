import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/screens/HomePage";
import Alphabet from "./src/screens/Alphabets";
import Animals from "./src/screens/Animals";
import Food from "./src/screens/Food";
import Body from "./src/screens/Body_parts";
import Numbers from "./src/screens/Numbers";
import HangMan from "./src/screens/HangMan";


const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Alpha" component={Alphabet} />
				<Stack.Screen name="Animal" component={Animals} />
				<Stack.Screen name="Foody" component={Food}/>
				<Stack.Screen name="Body_parts" component={Body}/>
				<Stack.Screen name="Num" component={Numbers}/>
				<Stack.Screen name="Hang" component={HangMan}
				options={{
					title: 'HANGMAN', // Set your custom title here
					headerStyle: {
					  backgroundColor: 'grey', // Set your custom header background color
					},
					headerTintColor: '#fff',
				  }}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default App;
