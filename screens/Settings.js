import React from "react";
import { SafeAreaView, View, StatusBar as sb, useColorScheme } from "react-native"
import { darkStyles } from "../styling/themeselctor";
import { lightStyles } from "../styling/themeselctor";
import { useTranslation } from 'react-i18next'
import { Picker } from "@react-native-picker/picker"


export function SettingsScreen() {

    const colorScheme = useColorScheme()
    const styles = colorScheme === 'dark' ? darkStyles : lightStyles
    const { t, i18n } = useTranslation()
    
    const languages = [
        { label: "English", value: "en" },
        { label: "Spanish", value: "es" }
      ]

    return (
        <View style={styles.page}>
        <Picker
          selectedValue={i18n.language}
          onValueChange={(val, i) => {
            i18n.changeLanguage(val)
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




