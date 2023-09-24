import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function Figma1() {
  return (
    <View style={{width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0, 204, 249, 0) 0%, rgba(0, 204, 249, 0.58) 30%, rgba(0, 204, 249, 0.70) 49%, rgba(0, 204, 249, 0.36) 71%, #00CCF9 100%)'}}>
      <View style={styles.container}>
      <Image source={require('/assets/Ellipse 8.png')} style={{width: 140, height:140}} />
      <text style={styles.texttitle1}>GROW</text>
      <text style={styles.texttitle}>YOUR BUSINESS</text>
      <text style={styles.texttitle2}>We will help you to grow your business using</text>
      <text style={styles.texttitle3}>online server</text>
      </View>
      <View style={styles.button}>
        <button style={styles.button1} >LOGIN</button>
        <button style={styles.button1} >SIGN UP</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerr: {
    width: '100%', 
    height: '100%', 
  },
  container: {
    paddingTop: 105,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texttitle1: {
    paddingTop: 52,
    color: 'black',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  texttitle: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  texttitle2: {
    paddingTop:62,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  texttitle3: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  button:{
    paddingBottom: 94,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button1: {
    width: 119,
    height: 48, 
    backgroundColor: '#E3C000', 
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word',
    borderRadius: 10
  }
})


