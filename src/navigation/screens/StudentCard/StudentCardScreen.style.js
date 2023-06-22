import { StyleSheet } from "react-native";
import { scaled } from "../../../components/theme/scaler";

export const styles = StyleSheet.create({
    topContent: {
        flexDirection: "column",
        justifyContent: "space-between",

    },
    topContentInfo: {
        flexDirection: "row",
        gap: scaled(30),
    },


    item: {
        color: 'black',
        fontSize: scaled(20),
        marginTop: scaled(20),
        marginBottom: scaled(5),
        marginLeft: scaled(10),
    },



    bottomContent: {
        marginLeft: scaled(10),
        marginRight: scaled(10),
        borderWidth: 0.5,
        borderTopColor: 'grey',
        marginBottom: scaled(3),
        marginTop: scaled(3),

    },

    bottomContentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: scaled(10),
        marginRight: scaled(10),
        borderWidth: 0.5,
        borderTopColor: 'grey',
        marginBottom: scaled(3),
        marginTop: scaled(3),
        backgroundColor: "grey",
    },

    averageText: {
        color: 'black',
        marginLeft: scaled(16),
    },
    creditText: {
        color: 'black'
    },

    subjectName: {
        paddingLeft: scaled(20),
        color: 'red',
        fontSize: scaled(16),
    },
    subjectResult: {
        color: 'red',
        width: '30%',
        textAlign: "center",
        fontSize: scaled(16),
    }

});
