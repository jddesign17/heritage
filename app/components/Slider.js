import {
  View,
  Image,
  Dimensions,
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import image1 from "../../assets/paneer/1.png";
import image2 from "../../assets/paneer/2.png";
import image3 from "../../assets/paneer/3.png";
import { styles } from "../style/style";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Slider() {
  const { width } = Dimensions.get("window");
  const data = [
    {
      id: 1,
      name: "Fresh paneer",
      images: [image1, image2, image3],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const animatedValues = useRef(
    data[0].images.map(() => new Animated.Value(1))
  ).current;

  useEffect(() => {
    animatedValues.forEach((anim, index) => {
      Animated.timing(anim, {
        toValue: index === activeIndex ? 1.5 : 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [activeIndex]);

  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setActiveIndex(index);
  };

  return (
    <View>
      <View style={[styles.container]}>
      <View style={[styles.radius,styles.defaultPadding]}>
      <FlatList
          horizontal
          pagingEnabled
          data={data[0].images}
          renderItem={({ item }) => (
            <View style={[styles.imageContainer]}>
              <Image source={item} style={styles.image} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          onScroll={onScroll}
          scrollEventThrottle={16}
          snapToAlignment="center"
        />
      </View>

        <View style={styles.dotsContainer}>
          {data[0].images.map((_, index) => (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: index === activeIndex ? 9 : 8,
                  height: index === activeIndex ? 9 : 8,
                  backgroundColor:
                    index === activeIndex ? "#FF5733" : "#B0B0B0",
                  transform: [{ scale: animatedValues[index] }],
                },
              ]}
            />
          ))}
        </View>
      </View>

      <View  style={[styles.bacgroundWhite,styles.paddingVertical,styles.defaultPadding,styles.radiusbottom,styles.shadow,]}>
        <View style={[styles.marginTop]}>
          <View style={styles.flex}>
          <Text style={[styles.Orange,styles.DescText]}>Heritage</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} style={styles.Orange} />
          </View>
          <Text style={styles.headerText}>Fresh Paneer</Text>
          <Text style={[styles.Gray,styles.salesText]}>200 g</Text>
          <View style={[styles.flex,styles.justifyBetween]}>
          <View style={[styles.flex,styles.smallGap]}>
          <Text style={[styles.DescText]}>₹115</Text>
          <Text style={[styles.strike,styles.salesText,styles.Gray]}>₹115</Text>
          </View>
          <View>
            <TouchableOpacity style={[styles.btnBox2,styles.radius,styles.shadow]}>
              <Text  style={styles.btnText}>2 options</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    
    </View>
  );
}
