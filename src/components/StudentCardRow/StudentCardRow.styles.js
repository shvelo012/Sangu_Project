import { StyleSheet } from "react-native";
import { scaled } from "../theme/scaler";

export const styles = StyleSheet.create({

    subjectInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: scaled(12),
        paddingBottom: scaled(12),

    },
    subjectName: {
        paddingLeft: scaled(22),
        width: '70%',
        color: 'black'
    },
    subjectScore: {
        flexDirection: "column",
        width: '30%',
        textAlign: "center",
        color: 'black'
    }
})
