import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Image} from 'react-native';

export default function Figma1() {
  return (
    <View style={{width: '100%', height: '100%', background: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)'}}>
        <View>
            <text style={styles.textlogin}>LOGIN</text>
        </View>
        <View style={styles.name}>
            <View style={styles.Image1}>
                <Image source={require('/assets/avatar_user 1.png')} style={{width: 32, height: 32}}/>
            </View>
            <TextInput placeholder='Name' style={styles.inputname}></TextInput>
        </View>
        <View style={styles.password}>
            <View style={styles.Image1}>
                <Image source={require('/assets/lock-152879 1.png')} style={{width: 32, height: 32}}/>
            </View>
            <TextInput placeholder='Password' style={styles.inputpassword}></TextInput>
            <View style={styles.Image}>
                <Image source={require('/assets/eye 1.png')} style={{width: 30, height: 30}}/>
            </View>
        </View>
        <View style={styles.buttonn}>
            <button style={styles.button}>LOGIN</button>
        </View>
        <View>
            <text style={styles.text3}>CREATE ACCOUNT</text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    textlogin: {
        width: 95,
        height: 35,
        paddingTop: 82,
        paddingLeft: 30,
        paddingBottom: 75,
        color: 'black',
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    name:{
        marginLeft: 15,
        width: 360,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px #F2F2F2 solid'
    },
    password:{
        marginBottom: 59,
        marginTop: 20,
        marginLeft: 15,
        width: 360,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px #F2F2F2 solid'
    },
    inputpassword: {
        paddingLeft: 15,
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        width: 310,
        height: 54,
        fontSize: 20,
    },
    inputname:{
        paddingLeft: 15,
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        width: 350,
        height: 50,
        fontSize: 20,
    },
    buttonn:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    },
    button: {
        backgroundColor: 'black',
        width: 330,
        height: 45,
        color: 'white',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    },
    text3:{
        paddingTop: 45,
        textAlign: 'center', 
        color: 'black', 
        fontSize: 20, 
        fontFamily: 'Arial', 
        fontWeight: '700', 
        wordWrap: 'break-word',
        paddingBottom: 44
    },
    Image: {
        paddingRight: 40,
        width: 40, 
        height: 50, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor:'rgba(196, 196, 196, 0.30)',
    },
    Image1: {
        paddingLeft: 10,
        width: 40, 
        height: 50, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor:'rgba(196, 196, 196, 0.30)',
    },
})

