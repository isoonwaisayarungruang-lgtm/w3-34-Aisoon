import { View,Text,Button,StyleSheet,TextInput } from "react-native";
import { useState } from "react";

export default function Rectangle(){


const [area, setArea] =useState(0)
const [width,setWidth] =useState (0)
const [length,setLength] =useState (0)


function rectangleCal (){
    var result = width * length
    setArea(result)
}

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณพื้นที่สี่เหมี่ยม</Text>
            <Text style={styles.textTitle}>ความกว้าง คือ {width} ซม.</Text>
            <Text style={styles.textTitle}>ความยาว คือ {length} ซม.</Text>
            <Text style={styles.textTitle}>พื้นที่สีเหลี่ยม คือ {area} ตร. ซม.</Text>
            {/* <Button title="ไปหน้า 2" /> */}
            <TextInput style={styles.TextInput} placeholder="กรอกความกว้าง" placeholderTextColor= "gray" value={width.toString()} onChangeText={(w) => setWidth(Number(w))}/>
            <TextInput style={styles.TextInput} placeholder="กรอกความกว้าง" placeholderTextColor="gray" value={length.toString()} onChangeText={(l) => setLength(Number(l))}/>

            <Button title=" คำนวณ" onPress={() => rectangleCal()} /> 
        </View>

    )
}

const styles = StyleSheet.create({
    box:{
    flex: 1,
    backgroundColor: "lightpink",
    justifyContent:"center",
    alignItems:"center",
    gap:20
    

    },
    textTitle :{
        fontSize:22,
        fontWeight:"700",
        color:"white"
    },
    TextInput :{
        borderWidth:3,
        borderColor :"white",
        borderRadius:20,
        width:"80%"
        
    }
})