import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Vibration} from 'react-native';
import { useFonts } from 'expo-font';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Button from 'apsl-react-native-button'
import react from 'react';
import * as Notification from 'expo-notifications'


//CoolFont: require('./assets/Pixellari.ttf'),

export default function App() {
  

  
  const [warningColour, setwarningColour] = react.useState('red')
  const [Error, setError] = react.useState('')
  const [number1, onChangeNumber1] = React.useState(0);
  const [number2, onChangeNumber2] = React.useState(0);
 


  const [loaded] = useFonts({
    CoolFont: require('./assets/Pixellari.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  

  

  function randomTime(Rtime){
    
    
    var Min1 = parseFloat(number1)
    var Min2 = parseFloat(number2)
    var Time = []

  for(var i = Min1; i <= Min2; i+=0.01){
    Time.push(i)
  }
  


    
    if (Time.length == 0 || Min1 > Min2){
      
      setError('Invalid Input >:(')
      setwarningColour('red')
      
      return
    }
    else{
      setwarningColour('green')
      setError('Notification set ;))))')
    }
    
    var Rlength = Math.floor(Math.random () * Time.length)
    var Rtime = Time[Rlength]
    console.log(Rtime)
    

    setTimeout(() => {
      Vibration.vibrate(5 * 1000)
    }, Rtime * 60000);

    Notification.scheduleNotificationAsync({
      content:{
        title: 'Get going with your task!!!!',
        body:'Dont even think about it just gooooooo',
        
        
      },
      trigger:{
        seconds: Rtime * 60,
        

      }
    })
    
    
    
    
    
  }

  
  
  
  
 
  
  return (
    <>




    <Text style={styles.instructions}>
      This app gives you a notification randomly between the allocated minutes below. 
      {'\n'}
      {'\n'}
      The apps purpose was primarily created for productivity, as its developer is 
      too stupid to do a task if they think about doing it long enough.
      {'\n'}
      {'\n'}
      i.e: The app the outsources procrastination to chance
      
    </Text>


    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Min1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Min2"
        keyboardType="numeric"
        
      />
    </View >
    <Text style={{
      textAlign:'center',
      marginTop:500,
      fontSize:50,
      fontFamily:'CoolFont',
      color:warningColour
    }}>{Error}</Text>

    <View style={styles.Buttons}>
      
    <Button onPress={randomTime} style={{backgroundColor: 'red',}}>
      Submit
    </Button>
    </View>
    
    
    </>
  );
  
}




const styles = StyleSheet.create({
  
  Buttons:{
    fontFamily:'CoolFont',
    fontSize:100,
    paddingTop:50,
    marginRight:100,
    marginLeft:100,
    

  },

  input: {
    margin: 50,
    borderWidth: 1,
    padding: 30,
    fontFamily:'CoolFont',
    fontSize:25,
    textAlign:'center'
  },
  container:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:300,
    marginRight:70,
    
    position:'absolute',
    
    
  },
  instructions:{
    textAlign:'center',
    paddingHorizontal:50,
    marginTop:50,
    fontFamily:'CoolFont',
    position:'absolute',
    fontSize:20,
    

  }
});
