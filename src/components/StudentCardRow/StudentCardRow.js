import React from "react";
import { View, Text } from "react-native";
import {styles} from "./StudentCardRow.styles";

const StudentCardRow = ({ credits, name, result, score, state }) => {


    return (
        <View>
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>{name}</Text>
                <Text style={styles.subjectScore}>
                    {score} {state !== 'current' ? '(' + result + ')' : null}
                </Text>
            </View>
        </View>
        </View>
    );

};
export default StudentCardRow;
