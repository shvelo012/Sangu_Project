import React, { useState } from "react";
import { Text, TouchableOpacity, Modal, View, Image, ScrollView } from "react-native";
import { styles } from "./HomeSubjectsRow.styles";


const HomeSubjectsRow = ({ subject, info, total, ScoreDetails }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal2 = () => {
    setModalVisible2(true);
  };

  const closeModal2 = () => {
    setModalVisible2(false);
  };


  return (
    <>
      <TouchableOpacity style={styles.container} onPress={openModal}>
        <Text style={styles.textSubject}>{subject}</Text>
        <TouchableOpacity onPress={openModal2} ><Image style={styles.iconStyle} source={info[0]} /></TouchableOpacity>
        <TouchableOpacity onPress={openModal2} ><Image style={styles.iconStyle} source={info[1]} /></TouchableOpacity>
        <TouchableOpacity onPress={openModal2} ><Image style={styles.iconStyle} source={info[2]} /></TouchableOpacity>
        <Text style={styles.textScore}>{total}</Text>
      </TouchableOpacity>


      <Modal visible={modalVisible2} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.modalHeader}>{subject}</Text>
            <TouchableOpacity onPress={closeModal2}>
              <View>
                <Image
                  style={styles.closeButton}
                  source={require("../../img/closeButton.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.modalHeader}>{subject}</Text>
            <TouchableOpacity onPress={closeModal}>
              <View>
                <Image
                  style={styles.closeButton}
                  source={require("../../img/closeButton.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        <ScrollView style={styles.HomeScrollStyle}>
          <View style={styles.scoreContainer}>
            {ScoreDetails.map((item, index) => (
              <View key={index} style={styles.modalElements}>
                <View>
                  <Text style={styles.modalName}> {item.name}</Text>
                </View>
                <View>
                  <Text
                    style={styles.modalScore}>{item.grade && item.grade.relative ? item.grade.relative : "_"} ({item.absolute}-დან)</Text>
                </View>
              </View>
            ))}
          </View>
      </ScrollView>
        </View>

      </Modal>
    </>
  );
};

export default HomeSubjectsRow;
