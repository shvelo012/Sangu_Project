import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    topContent: {
        flexDirection: "column",
        justifyContent: "space-between",

    },
    topContentInfo:{
        flexDirection:"row",
        gap:30,
    },


    item:{
        color:'black',
        marginTop:20,
      marginBottom:5,
    },



    bottomContent:{
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
       backgroundColor:'white',
        marginBottom:10,

    },

    bottomContentHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:0.5,
        paddingTop:10,
        paddingBottom:10,
    },

    averageText:{
      color:'black'
    },
    creditText:{
        color:'black'
    },

    subjectName:{
        paddingLeft:20,
        color:'black',
    },
    subjectResult:{
        color:'black',
        width:'30%',
        textAlign:"center"
    }

});
