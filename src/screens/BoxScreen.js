import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BoxScreen = () => {
  return (
    <View style= {styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
    parentStyle: {
      height: 200,
      borderWidth: 3,
      borderColor: 'black',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    viewOneStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'red'
    },
    viewTwoStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'green',
      marginTop: 50
    },
    viewThreeStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'purple'
    }
  }
)

export default BoxScreen;
