import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { TextInput } from 'react-native-web';

export default function Figma1() {
  return (
    <View style={{width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0, 204, 249, 0) 0%, rgba(0, 204, 249, 0.58) 30%, rgba(0, 204, 249, 0.70) 49%, rgba(0, 204, 249, 0.36) 71%, #00CCF9 100%)'}}>
        <View style={styles.container}>
        <Image source={require('/assets/lock-152879 1.png')} style={styles.Image} />
        <text style={styles.text1}>FORGET</text>
        <text style={styles.text2}>PASSWORD</text>
        <text style={styles.text3}>Provide your account’s email for which you</text>
        <text style={styles.text4}>want to reset your password</text>
      </View>
      <View style={styles.input}>
      <Image source={require('/assets/mail-2935365 1.png')} style={styles.ImageEmail}/>
        <TextInput style={styles.textinput} placeholder='Email'>
        </TextInput> 
      </View>
      <View style={styles.buttonview}>
        <button style={styles.button}>NEXT</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 76,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  Image: {
    width: 105, 
    height:117,
  },
  text1: {
    paddingTop: 37,
    color: 'black',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  text2: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  text3 : {
    paddingTop:50,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  text4: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  input: {
    paddingBottom: 43,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textinput: {
    backgroundColor: 'rgba(196, 196, 196, 1)',
    width: 257,
    height: 45,
    fontSize: 18,
  },
  ImageEmail: {
    width: 48,
    height: 45
  },
  buttonview:{
    paddingBottom: 124,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'rgba(227, 192, 0, 1)',
    width: 305,
    height: 45,
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  }
})


