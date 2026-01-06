import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
export default function Rectangle() {


    const [cubicmeter, setcubicmeter] = useState(0)
    const [liter, setliter] = useState(0)


    function Cubicliter() {
        var result = cubicmeter * 1000
        setliter(result)
    }

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณลูกบาศก์เมตรเป็นลิตร</Text>
            <Text style={styles.textTitle}>ลูกบาศก์เมตร = {cubicmeter} </Text>
            <Text style={styles.textTitle}>ลิตร = {liter} </Text>

            <TextInput style={styles.TextInput} placeholder="กรอกลูกบาศก์เมตร" placeholderTextColor="gray" value={cubicmeter.toString()} onChangeText={(c) => setcubicmeter(Number(c))} />
           

            <Button title=" คำนวณ" onPress={() => Cubicliter()} />
        </View>

    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: "lightpink",
        justifyContent: "center",
        alignItems: "center",
        gap: 20

    },
    textTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "white"
    },
    TextInput: {
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 20,
        width: "80%"
    }
})