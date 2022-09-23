import React from 'react'
import {StyleSheet, TouchableOpacity, View ,Text,Image} from 'react-native'
import Minus from '../icons/btnminus.png'
import Plus from '../icons/btnadd.png'
function PlusMinus({setAmount,amount}) {

    const handleMinus = ()=>{
        setAmount(amount-1)
    }

    const handlePlus = ()=>{
        setAmount(amount+1)
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleMinus} ><Image source={Minus}/></TouchableOpacity>
        <Text style={styles.amount}>{amount}</Text>
        <TouchableOpacity onPress={handlePlus}><Image source={Plus}/></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'
        
    },
    amount:{
        paddingLeft:20,
        paddingRight:20
    },
})

export default PlusMinus