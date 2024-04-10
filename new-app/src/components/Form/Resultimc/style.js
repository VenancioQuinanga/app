import { StyleSheet  } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex:1,
        marginTop:15,
        paddingTop:65,
        alignItems:'center',
        borderRadius:50,
        width:'100%',
        backgroundColor:'#FF0043',
        fontSize:48,
        fontWeight:'bold'
    },
    numberImc:{
        fontSize:48,
        fontWeight:'bold',
        color:'#FF0043'
    },
    information:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    },
    boxSharebutton:{
        width:'100%',
        marginBottom:10,
        alignItems:'center'
    },
    shared:{
        backgroundColor:'#1877f2',
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5
    },
    sharedText:{
        paddingHorizontal:30,
        color:'#ffffff',
        fontWeight:'bold'
    }
})

export default styles;