import React from 'react';
import {view,Text,TouchableOpacity,share} from 'react-native';
import styles from '..Resultimc/style';

export default function ResultIMC(props){

    const onShare = async ()=>{
        const result = await Share.Share({
            message: `Meu IMC é : ${props.resultIMC}`
        })
    }

    return(
        <view style={styles.resultIMC}>
            <view style={styles.boxSharebutton}>
            {
            <view>
            props.resultIMC != null?
            <TouchableOpacity
            onPress={onShare()}
             style={styles.shared}>

            <Text style={styles.sharedText}>Partilhar</Text>
            </TouchableOpacity>
            :
            </view>
            }
            </view>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text>{props.resultIMC}</Text>
        </view>
    )
}