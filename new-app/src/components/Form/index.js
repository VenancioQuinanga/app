import {React,useState} from 'react';
import {view,TextInput,Text,Button,TouchableOpacity,Vibration} from 'react-native';
import ResultIMC from './Resultimc';
import styles from './style';

export default function Form(){

    const [height,setHeight] = useState((null))
    const [weight,setWeight] = useState((null))
    const [messageImc,setMessageImc] = useState('preencha o peso e a altura')
    const [imc,setImc] = useState((null))
    const [textButton,setTextButton] = useState('calcular')
    const [errorMessage,setErrorMessage] = useState((null))

    function verificationImc(){
        if (imc == null) {
            setErrorMessage('campo obrigatório')
            Vibration.vibrate()
        }
    }

    function imcCalculator(){
        setImc((weight/(height*height))).toFixed(2)
    }

    function validationImc(){
        if (weight != null || height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('O seu IMC é : ')
            setErrorMessage(null)
        } else {
            verificationImc()
            setImc(null)
            setTextButton('calcular')
            setMessageImc('preencha o peso e a altura')
        }
    }

    return(
        <view style={styles.formContext}>
           <view style={styles.form}>
            <Text>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChange={setHeight}
            value={height}
            placeholder='Ex. 1.75'
            keyboardType='numeric'
            />
            <Text>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChange={setWeight}
            value={weight}
            placeholder='Ex. 75.365'
            keyboardType='numeric'
            />
            <TouchableOpacity
            style={styles.buttonCalculator}
             onPress={()=>validationImc()}
            >
               <Text style={styles.textButtonCalculator}>{textButton}</Text> 
            </TouchableOpacity>
           </view>
           <ResultIMC ResultIMC={imc} messageResultImc={messageImc}/>
        </view>
    )
}