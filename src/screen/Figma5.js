import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function Figma1() {
  return (
    <View style={styles.container}>
        <text style={styles.textlogin}>LOGIN</text>
        <View style={styles.email}>
            <input placeholder='Email' style={styles.inputemail}></input>
        </View>
        <View>
            <input placeholder='Password' style={styles.inputemail}></input>
        </View>
        <View style={styles.buttonn}>
            <button style={styles.button}>LOGIN</button>
        </View>
        <View>
            <text style={styles.text1}>When you agree to terms and conditions</text>
        </View>
        <View>
            <text style={styles.text2}>For got your password?</text>
        </View>
        <View>
            <text style={styles.text3}>Or login with</text>
        </View>
        <View>
            <Image source={require('/assets/logo.png')} style={{width: 350, height:50, borderColor: 'blue',borderWidth: 3,borderColor: "Blue",}} />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(49, 170, 82, 0.19)'
    },
    textlogin: {
        paddingTop: 50,
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    email:{
        paddingTop: 60,
        paddingBottom: 40,
    },
    inputemail:{
        backgroundColor: 'rgba(196, 196, 196, 1)',
        width: 350,
        height: 50,
        fontSize: 18,
    },
    buttonn:{
        paddingTop: 70,
    },
    button: {
        backgroundColor: '#ff213b',
        width: 357,
        height: 50,
        color: 'white',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    },
    text1: {
        paddingTop: 20,
        paddingBottom: 13,
        textAlign: 'center', 
        color: 'black', 
        fontSize: 14, 
        ontFamily: 'Arial', 
        fontWeight: 400, 
        wordWrap: 'break-word'
    },
    text2:{
        paddingBottom: 14,
        textAlign: 'center', 
        color: '#5D25FA', 
        fontSize: 14, 
        fontFamily: 'Roboto', 
        fontWeight: '400', 
        wordWrap: 'break-word'
    },
    text3:{
        textAlign: 'center', 
        color: 'black', 
        fontSize: 14, 
        fontFamily: 'Roboto', 
        fontWeight: '400', 
        wordWrap: 'break-word',
        paddingBottom: 44
    }
})

