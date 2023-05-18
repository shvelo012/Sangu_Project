import React, { useState } from 'react';
import { Text, TouchableOpacity, Modal, View } from 'react-native';
import { styles } from './HomeSubjectsRow.styles';




const HomeSubjectsRow = ({ subject, info, total }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <>
      <TouchableOpacity style={styles.container} onPress={openModal}>
        <Text style={styles.textSubject}>{subject}</Text>
        <Text style={styles.textInfo}>{info}</Text>
        <Text style={styles.textScore}>{total}</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text>{subject}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HomeSubjectsRow;
