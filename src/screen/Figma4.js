import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { TextInput } from 'react-native-web';

export default function Figma1() {
  return (
    <View style={{width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0, 204, 249, 0) 0%, rgba(0, 204, 249, 0.58) 30%, rgba(0, 204, 249, 0.70) 49%, rgba(0, 204, 249, 0.36) 71%, #00CCF9 100%)'}}>
        <View style={styles.container}>
        <text style={styles.text1}>CODE</text>
        <text style={styles.text2}>VERIFICATION</text>
        <text style={styles.text3}>Enter ontime password sent on</text>
        <text style={styles.text4}>++849092605798</text>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.textinput}></TextInput> 
        <TextInput style={styles.textinput}></TextInput> 
        <TextInput style={styles.textinput}></TextInput> 
        <TextInput style={styles.textinput}></TextInput> 
        <TextInput style={styles.textinput}></TextInput> 
        <TextInput style={styles.textinput}></TextInput> 
      </View>
      <View style={styles.buttonview}>
        <button style={styles.button}>VERIFY CODE</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 113,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  Image: {
    width: 105, 
    height:117,
  },
  text1: {
    color: 'black',
    fontSize: 60,
    fontFamily: 'Arial',
    fontWeight: 700,
    wordWrap: 'break-word'
  },
  text2: {
    paddingBottom: 30,
    paddingTop: 62,
    width: 302, 
    height: 53, 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 20, 
    fontFamily: 'Arial', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
  text3 : {
    paddingTop: 22,
    width: '302', 
    height: '53', 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 15, 
    fontFamily: 'Arial', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
  text4: {
    textAlign: 'center', 
    color: 'black',
    fontSize: 15,
    fontFamily: 'Arial',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  input: {
    paddingBottom: 34,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textinput: {
    textAlign: 'center',
    width: 50, 
    height: 50, 
    background: 'rgba(196, 196, 196, 0)', 
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
    border: '1px black solid'
  },
    ImageEmail: {
      width: 48,
      height: 45
    },
  buttonview:{
    paddingBottom: 119,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'rgba(227, 192, 0, 1)',
    width: 339,
    height: 50,
    color: 'black',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: '700',
    wordWrap: 'break-word'
  }
})
