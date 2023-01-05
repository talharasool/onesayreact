import React from "react";
import { SafeAreaView, View, StatusBar as sb, useColorScheme } from "react-native"

import { darkStyles, lightStyles } from "../styling/themeselctor";
import { Picker } from "@react-native-picker/picker"

export function SettingsScreen() {

    const colorScheme = useColorScheme()
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles

    
    const languages = [
        { label: "English", value: "en" },
        { label: "Spanish", value: "es" }
      ]

    return (
        <View style={styles.page}>
        <Picker
         
          onValueChange={(val, i) => {
       
          }}
          style={styles.picker} dropdownIconColor={colorScheme === 'dark' ? 'white': 'black'}>
          {
            languages.map(({ label, value }) => {
              return (
                <Picker.Item key={value} label={label} value={value} />
              )
            })
          }
        </Picker>
      </View>
    );
  }




