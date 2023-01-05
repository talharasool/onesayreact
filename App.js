import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SettingsScreen } from './screens/Settings';

import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
    </View>
  );
}


export default function App() {

  //Themeing.
  const colorScheme = useColorScheme()
  const tabbarIconColor = colorScheme === 'dark' ? 'white' : 'black'
  console.log(colorScheme)

  return (


<NavigationContainer  theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} >
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          tabBarInactiveBackgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          tabBarStyle: { borderTopWidth: 0,
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white'
          },
        }}>
        <Tab.Screen name='Home' component={HomeScreen} 
        
        options ={ {
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{ color: tabbarIconColor}}>Home</Text>
          ),
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={tabbarIconColor} />           
        }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{  tabBarLabel: ({focused, color, size}) => (
          <Text style={{ color: tabbarIconColor}}>Settings</Text>
        ),
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='cog' size={size} color={tabbarIconColor} /> 
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}