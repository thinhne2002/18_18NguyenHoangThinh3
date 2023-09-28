import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Image} from 'react-native';

export default function Figma1() {
  return (
    <View style={styles.container}>
        <View style={styles.Image}>
            <Image source={require('/assets/Group.png')} style={{width: 112,height: 107}}/>
        </View>
        <View style={styles.name}>
            <Image source={require('/assets/Group 3.png')} style={{width: 30,height: 30}}/>
            <TextInput placeholder='Please input username' style={styles.inputname}></TextInput>
        </View>
        <View style={styles.password}>
            <Image source={require('/assets/Group 5.png')} style={{width: 30,height: 30}}/>
            <TextInput placeholder='Please input password' style={styles.inputpassword}></TextInput>
        </View>
        <View>
            <button style={styles.buttonlogin}>LOGIN</button>
        </View>
        <View style={styles.text}>
            <Text style={styles.text_1}>Register</Text>
            <Text style={styles.text_2}>Forgot Password</Text>
        </View>
        <View style={styles.text1}>
            <Text style={styles.line}></Text>
            <Text style={styles.text1_1}>Other Login Methods</Text>
            <Text style={styles.line}></Text>
        </View>
        <View style={styles.imagee}>
            <Image source={require('/assets/Group 8.png')} style={styles.image1}/>
            <Image source={require('/assets/Group 9.png')} style={styles.image2}/>
            <View style={{width:74, height: 74,justifyContent:'center',alignItems:'center',backgroundColor: '#3A579C',borderRadius: 10,}}>
                <Image source={require('/assets/brandico_facebook.png')} style={styles.image3}/>
            </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%', 
        position: 'relative', 
        background: 'white',
        alignItems: 'center'
    },
    Image:{
        marginTop: 33,
        alignItems: 'center',
        justifyContent: 'center',
        width: 140,
        height: 141
    },
    name:{
        marginTop: 20.8,
        width: 330,
        height: 54,
        borderWidth: 1,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#C4C4C4',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputname:{
        width: 300,
        height: 54,
        paddingLeft: 15,
        fontSize: 18,
        color: '#C4C4C4'
    },
    password:{
        marginTop: 36,
        width: 330,
        height: 54,
        borderWidth: 1,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#C4C4C4',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputpassword:{
        width: 300,
        height: 54,
        paddingLeft: 15,
        fontSize: 18,
        color: '#C4C4C4'
    },
    buttonlogin:{
        marginTop: 50,
        width: 330, 
        height: 48, 
        borderColor: 'white',
        backgroundColor: '#386FFC', 
        borderRadius: 10,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    },
    text:{
        width: 330,
        height: 21,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    text_1:{
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    },
    text_2:{
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    },
    text1:{
        marginTop:34,
        width: 330,
        height: 21,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    line:{
        width: 73, 
        height: 0, 
        border: '1px #0E18F5 solid'
    },
    text1_1:{
        width: 170,
        height: 21,
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    },
    imagee:{
        marginTop: 39,
        width: 330,
        height: 74,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between' 
    },
    image1:{
        width: 74,
        height: 74,
    },
    image2:{
        width: 74,
        height: 74,
    },
    image3:{
        width: 32,
        height: 45,
        backgroundColor: '#3A579C',
    },
})

