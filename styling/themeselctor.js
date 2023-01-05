import React from "react";
import { StyleSheet } from 'react-native';


export const lightStyles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? sb.currentHeight : 0
    },
    color: {
    color: 'black'
    },
    middle: {
    justifyContent: 'center',
    },
    list: {
    width: '100%',
    },
    listContainer: {
    alignItems: 'center',
    },
    search: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: 'rgba(0,0,0, 0.3)'
    },
    picker: {
        marginTop: 100,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)'
      }
    })
    
   export const darkStyles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? sb.currentHeight : 0,
    backgroundColor: '#14191f',
    },
    color: {
    color: 'white'
    },
    middle: {
    justifyContent: 'center',
    },
    list: {
    width: '100%',
    },
    listContainer: {
    alignItems: 'center',
    },
    search: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: 'rgba(0,0,0, 0.1)',
    color: 'white',
    },
    picker: {
        marginTop: 100,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0.5)'
      }
    });


   export const cardLight = StyleSheet.create({
        newsCard: {
        backgroundColor: '#ecf0f1',// 'rgba(255,255,255,0.4)',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        },
        picture: {
        width: '30%',
        height: 'auto',
        minHeight: 120
        },
        heading: {
        fontSize: 18,
        width: '70%',
        paddingLeft: 10
        },
        newCardView:{
          alignSelf: "stretch",
          borderRadius: 0,
          shadowOpacity: 0.0,
          shadowColor: "white",
          shadowOffset: {
              height: 0,
              width: 0
          },
          backgroundColor: "#fff",
          marginTop: 20,
          },
          headlingColor:{
            fontSize: 18,
            fontWeight: "600",
            marginTop: 10,
            color: 'black',
          },
          subheadlingColor:{
            fontSize: 15,
            fontWeight: "200",
            marginTop: 10,
            color: 'black',
          },
        
        
        })
        
      export  const cardDark = StyleSheet.create({
        newsCard: {
        backgroundColor: '#2c3e50',
        padding: 10,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        },
        picture: {
        width: '30%',
        height: 'auto',
        minHeight: 120
        },
        heading: {
        fontSize: 18,
        width: '70%',
        paddingLeft: 10,
        color: 'white'
        },
        
        newCardView:{
          alignSelf: "stretch",
          borderRadius: 0,
          shadowOpacity: 0.0,
          shadowColor: "#353b48",
          shadowOffset: {
              height: 0,
              width: 0
          },
          backgroundColor: "#353b48",
          marginTop: 20,
          },
          headlingColor:{
            fontSize: 18,
            fontWeight: "600",
            marginTop: 10,
            color: 'white'
          },
          subheadlingColor:{
            fontSize: 15,
            fontWeight: "300",
            marginTop: 10,
            color: 'white',
          },
        
        })
        
    


