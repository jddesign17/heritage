import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { paneerProducts } from "../constant/index";
import { styles } from "../style/style";
export default function Similar() {
  return (
    <View
      style={[
        styles.bacgroundWhite,
        styles.defaultPadding,
        styles.marginTop,
        styles.radius,
        styles.paddingVertical
      ]}
    >
      <Text style={[styles.marginTop, styles.headerText]}>
        Similar Products
      </Text>
      <ScrollView
        horizontal
        style={[{ display: "flex", flexDirection: "row" }, styles.largeGap]}
      >
        <View style={[styles.flex, styles.largeGap, styles.marginTop]}>
          {paneerProducts.map((item) => (
            <TouchableOpacity key={item.id}>
              <View
                style={[styles.border, styles.radius, styles.SilderPadding]}
              >
                <Image
                  source={item.details.images}
                  style={styles.ImageSilder}
                />
              </View>

              <View style={styles.marginTop}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.category}>{item.category}</Text>
              </View>

              <View>
                <Text style={[styles.para1, styles.marginTop]}>
                  {item.details.grams}
                </Text>
               <View>
               {item.details.discountedRate !=null ? (
                  <Text style={[styles.para1, styles.strike]}>
                    ₹{item.details.discountedRate}
                  </Text>
                ):(
                    <View style={styles.marginTop}>
                        <Text></Text>
                    </View>
                )}
               </View>

               <View style={[styles.flex,styles.justifyBetween]}>
               <Text style={styles.category}>₹{item.details.actualRate}</Text>
               <TouchableOpacity style={[styles.btnBox,styles.radius]}>
                    <Text style={styles.btnText}>Add</Text>
               </TouchableOpacity>
               </View>
              </View>
              {
                item.details.offer && (
                    <View style={[styles.OfferBox,styles.radiusl]}>
                    <Text style={[styles.salesText,styles.white]}>{item.details.offer}</Text>
              </View>
                )
              }
              {
                item.details.pics && (
                    <View style={[styles.OfferBox2]}>
                    <Text style={[styles.salesText2,styles.white]}>{item.details.pics}</Text>
              </View>
                )
              }
            </TouchableOpacity>
          ))}

          
    

         

        </View>
      </ScrollView>
    </View>
  );
}
