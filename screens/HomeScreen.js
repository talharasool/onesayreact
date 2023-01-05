import React from "react";
import { SafeAreaView, View, StyleSheet, Text, StatusBar as sb, useColorScheme, Button } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";
import { useTranslation } from "react-i18next";

  
  const HomeStack = createNativeStackNavigator();
  
  export function HomeStackScreen() {

    const { t } = useTranslation()
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name={t('home')} component={MainScreen} options={{ title: t('home')}} />
        <HomeStack.Screen name='Details' component={DetailsScreen } options={{ title: t('details')}} />
      </HomeStack.Navigator>
    );
  }
  
  // <HomeStack.Screen name="Details" component={DetailsScreen} />
  
  