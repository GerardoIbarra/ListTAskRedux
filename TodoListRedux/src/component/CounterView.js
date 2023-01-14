import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {Counter,decrement,increment} from "../redux/CounterSlice"


function CounterView() {


    const counterState = useSelector(Counter);
    const dispatch = useDispatch()

    const onpresincrement = () => {
        dispatch(increment())
    }
    const onpresdescrement = () => {
        dispatch(decrement())
    }

  return (
    <View style={styles.constaniview}>
       <SafeAreaView>
            <View style={styles.itemcontainer}>
                <Text>{counterState.Counter}</Text>
                <View style={styles.itemcontainer}>
                    <Button title='Increment' onPress={onpresincrement} />
                    <Button title='DesIncrement' onPress={onpresdescrement} />
                </View>
            </View>
       
       </SafeAreaView>
    </View>
  )
}

export default CounterView

const styles = StyleSheet.create({
    constaniview:{
        flex:1,
        backgroundColor:"#2d2d2d",
        justifyContent:'center',

    },
    itemcontainer:{
        alignItems:'center',
    },
    buttonconainer:{
        flexDirection:'row'
    }

})