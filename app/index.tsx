import { View,Text,Button,StyleSheet } from "react-native";
import { useRouter } from "expo-router"; 
export default function App(){
    const router =useRouter()


    return (
        <View style={styles.box}>







            
            <Text style={styles.textTitle}>Home</Text>
            <Button title="คำนวณพื้นที่สี่เหลี่ยม" onPress={() => router.navigate('/rectangle')  } />
                <Button title="คำนวณลูกบาศก์เมตรเป็นลิตร" onPress={() => router.navigate('/cubicliter')  } />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent:"center",
    alignItems:"center",
    gap:10

    },
    textTitle :{
        fontSize:32,
        fontWeight:"700",
        color:"white"
    }
    
})


