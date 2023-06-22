import * as React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { View, Text, Linking, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./DetailsScreen.styles";


const handlePress = () => {
  Linking.openURL("https://sangu.edu.ge/geo/article/stundeturi-gzamkvlevi?fbclid=IwAR1VoZXK7uUwvnIpNd-HHjs86YoSxTUm3aJ8iDrWWaUoj2BBefx9ijBRNVo");
};



export default function Details({ navigation }) {

  const { logOut } = useContext(AuthContext);


  // const handleLogOut = async () => {
  //   await clearAsyncStorage();
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: "Auth" }],
  //   });
  // };

  // async function clearAsyncStorage() {
  //   try {
  //     await AsyncStorage.clear();
  //     console.log("AsyncStorage successfully cleared!");
  //   } catch (error) {
  //     console.error("Error clearing AsyncStorage: ", error);
  //   }
  // }


  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.containerItems, styles.profile]} onPress={() => navigation.navigate("Profile")}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.images} source={require('./img/user.png')} />
            <Text style={styles.text}>პროფილი</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItems} onPress={() => navigation.navigate("StudentCard")}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.images} source={require('./img/test.png')} />
            <Text style={styles.text}>სასწავლო ბარათი</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItems} onPress={() => navigation.navigate("Finances")}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.images} source={require('./img/cash.png')} />
            <Text style={styles.text}>ფინანსები</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItems} onPress={() => navigation.navigate("Exams")}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.images} source={require('./img/exam.png')} />
            <Text style={styles.text}>გამოცდები</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItems} onPress={() => navigation.navigate("Documents")}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.images} source={require('./img/paper.png')} />
            <Text style={styles.text}>დოკუმენტები</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerItems} onPress={handlePress}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.images} source={require('./img/external-link.png')} />
            <Text style={styles.text}>გზამკვლევი</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerItems, styles.exit]} onPress={() => logOut()}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image style={styles.images} source={require('./img/logout.png')} />
            <Text style={styles.text}>გამოსვლა</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
