import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function Figma1() {
  return (
    <View style={{width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(0, 204, 249, 0) 0%, rgba(0, 204, 249, 0.58) 30%, rgba(0, 204, 249, 0.70) 49%, rgba(0, 204, 249, 0.36) 71%, #00CCF9 100%)'}}>
      <View style={styles.container}>
      <Image source={require('/assets/Ellipse 8.png')} style={styles.Image} />
      <text style={styles.texttitle1}>GROW</text>
      <text style={styles.texttitle}>YOUR BUSINESS</text>
      <text style={styles.texttitle2}>We will help you to grow your business using</text>
      <text style={styles.texttitle3}>online server</text>
      </View>
      <View style={styles.button}>
        <button style={styles.button1} >LOGIN</button>
        <button style={styles.button1} >SIGN UP</button>
      </View>
      <View style={styles.footer}>
        <View style={styles.texttitle4}>HOW WE WORK?</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 69,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  Image: {
    width: 140, 
    height:140,
  },
  texttitle1: {
    paddingTop: 66,
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
    paddingTop:50,
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
    paddingBottom: 33,
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
  
  },
  footer: {
    paddingBottom: 91,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  texttitle4: {
    color : 'black',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '700',
    wordWrap: 'break-word',
    justifyContent: 'flex-end'
  }
})


