import React, { useState } from 'react';
import { Text, TouchableOpacity, Modal, View } from 'react-native';
import { styles } from './HomeSubjectsRow.styles';




const HomeSubjectsRow = ({ subject, info, total, ScoreDetails }) => {
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
            <Text style={styles.modalHeader}>{subject}</Text>
            <TouchableOpacity  onPress={closeModal}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scoreContainer}>
            {ScoreDetails.map((item, index) => (
              <View key={index} style={styles.modalElements}>
                <View>
                  <Text style={styles.modalName} > {item.name}</Text>
                </View>
                <View>
                  <Text style={styles.modalScore}>{item.grade ? item.grade.relative : '_' }  ({item.absolute}-დან)</Text>
                </View>
              </View>
            ))
            }
          </View>

        </View>
      </Modal >
    </>
  );
};

export default HomeSubjectsRow;
