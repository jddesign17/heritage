import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import Boxes from "./components/Boxes";
import { paneerDescription, importantPaneerInfo, salesDetails } from "./constant/index";
import Slider from "./components/Slider"
import Similar from "./components/Similar"

export default function index() {
  return (
    <SafeAreaView style={styles.defaultPadding}>
      <View style={[styles.bacgroundWhite, styles.paddingHeader]}>
        <View style={styles.defaultPadding}>
          <View style={[styles.flex, styles.justifyBetween]}>
            <View style={[styles.flex, styles.largeGap]}>
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={25} color="black" />
              </TouchableOpacity>
              <Text style={styles.headerText}>Heritage Fresh Paneer</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="sharealt" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>


      <Slider/>
        <Boxes object={paneerDescription} />
        <Similar />
        <Boxes object={salesDetails}/>

        <Boxes object={importantPaneerInfo} />
        
      </ScrollView>
    </SafeAreaView>
  );
}
