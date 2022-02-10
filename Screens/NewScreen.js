import React from "react";
import { StyleSheet, Text, View, FlatList} from "react-native";
import Share from 'react-native-share';
import colors from "../Components/colors";

export default function NewScreen({ route, navigation }) {
    const { itemId, title,category,description,weblink } = route.params;
    const message=JSON.stringify(weblink);
    const options = {message};
    const onShare = async (customOptions = options) => {
      try {
        await Share.open(customOptions);
      } catch (err) {
        console.log(err);
      }
    };
     
   return(
    <View style={styles.container}>
    <Text style={styles.titleStyle}>Details Screen</Text>
    <Text style={styles.textStyle}>2-title:</Text>
    <Text style={styles.anotherTextStyle}>{JSON.stringify(title)}</Text>
    <Text style={styles.textStyle}>3-category: </Text>
    <Text style={styles.anotherTextStyle}>{JSON.stringify(category)}</Text>
    <Text style={styles.textStyle}>4-description: </Text>
    <Text style={styles.anotherTextStyle}>{JSON.stringify(description)}</Text>
    <Text style={styles.textStyle}>5-weblink:</Text>
   <Text style={styles.item} onPress={async () => {await onShare();}} > {JSON.stringify(weblink)}</Text>
    </View>
   )
};
const styles = StyleSheet.create({
    container: {
       // marginTop: 20,
        flex: 1,
        backgroundColor: colors.Gray,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:'column'
    },
    textStyle:{
        color:colors.Black,
        fontSize:20,
        fontWeight:"bold",
        alignSelf:'baseline',
       paddingLeft:20
    },
    anotherTextStyle:{
        color:colors.Green,
        fontSize:30,
        fontWeight:"bold",
        alignSelf:'baseline',
       paddingLeft:20,
       fontStyle:'italic'
    },
    titleStyle:{
        color:colors.Black,
        fontSize:40,
        fontWeight:"bold",
        alignSelf:'center',
        
    },
    item:{
        color:colors.DarkBlue,
        fontSize:30,
        fontWeight:"bold",
        alignSelf:'baseline',
       paddingLeft:20
    },
   
});


