import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [textGreeting, setTextGreeting] = useState('Hello, tell me your name!');
 
  const textChangedHandler = (enteredText) => {
    setName(enteredText);
  };
 
  const buttonClickedHandler = () =>{
    setTextGreeting("Hello, " + name + "!");
  };

  return (
    <View style={styles.container}>
      <Text>{textGreeting}</Text>
      <View style = {styles.inputContainer}>
        <TextInput
          placeholder = "Name"
          style = {styles.input}
          onChangeText = {textChangedHandler}
          value = {name}
        />
      </View>
      <Button
        title = "Submit"
        onPress = {buttonClickedHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor:"black", 
    borderWidth:1,
    borderRadius:20,
    padding:5,
    width:200,
    height:30,
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    bottom:20,
    paddingTop:40,
  },
});
