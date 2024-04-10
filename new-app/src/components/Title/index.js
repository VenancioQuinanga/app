import React from 'react';
import {view,Text} from 'react-native';
import styles from './style';

export default function Title(){
    return(
        <view style={styles.boxTitle}>
            <Text style={styles.textTitle}>OneBitTHealth</Text>
        </view>
    )
}