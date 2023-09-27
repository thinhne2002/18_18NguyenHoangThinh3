import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Image} from 'react-native';

export default function Figma1() {
  return (
    <View style={styles.container}>
        <text style={styles.textlogin}>REGISTER</text>
        <View style={styles.name}>
            <TextInput placeholder='Name' style={styles.inputemail}></TextInput>
        </View>
        <View style={styles.phone}>
            <TextInput placeholder='Phone' style={styles.inputemail}></TextInput>
        </View>
        <View style={styles.email}>
            <TextInput placeholder='Email' style={styles.inputemail}></TextInput>
        </View>
        <View style={styles.password}>
            <TextInput placeholder='Password' style={styles.inputpassword}></TextInput>
            <View style={styles.Image}>
            <Image source={require('/assets/eye 1.png')} style={{width: 30, height: 30}}/>
            </View>
        </View>
        <View style={styles.birthday}>
            <TextInput placeholder='Birthday' style={styles.inputemail}></TextInput>
        </View>
        <View style={styles.radiobuttonn}>
            <Image source={require('/assets/rdbMale.png')} style={{width: 23, height: 23}}/>
            <text style={{paddingLeft:15}}>MALE</text>
            <Image source={require('/assets/rdbMale.png')} style={{width: 23, height: 23, marginLeft:40}}/>
            <text style={{paddingLeft:15}}>FEMALE</text>
        </View>
        <View style={styles.buttonn}>
            <button style={styles.button}>REGISTER</button>
        </View>
        <View>
            <text style={styles.text3}>When you agree to terms and conditions</text>
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
        paddingBottom: 60,
        paddingTop: 50,
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    email:{
        paddingBottom: 15,
    },
    name:{
        paddingBottom: 15,
    },
    phone:{
        paddingBottom: 15,
    },
    password:{
        flexDirection: 'row',
        paddingBottom: 15,
        alignItems: 'center',
    },
    inputpassword: {
        backgroundColor: 'rgba(49, 170, 82, 0.2)',
        width: 310,
        height: 50,
        fontSize: 20,
    },
    inputemail:{
        backgroundColor: 'rgba(49, 170, 82, 0.2)',
        width: 350,
        height: 50,
        fontSize: 20,
    },
    buttonn:{
        paddingTop: 30,
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
    text3:{
        paddingTop: 15,
        textAlign: 'center', 
        color: 'black', 
        fontSize: 14, 
        fontFamily: 'Roboto', 
        fontWeight: '400', 
        wordWrap: 'break-word',
        paddingBottom: 44
    },
    Image: {
        width: 40, 
        height: 50, 
        alignContent: 'flex-start',
        justifyContent: 'center',
        backgroundColor:'rgba(49, 170, 82, 0.2)'
    },
    radiobuttonn:{
        width: 350,
        height: 50,
        paddingTop: 25,
        flexDirection:'row',
        justifyContent:'',
    }
})

