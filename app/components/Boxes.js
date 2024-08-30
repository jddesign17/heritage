import { View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from '../style/style';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Boxes({ object }) {
  return (
    <View style={[styles.defaultPadding, styles.bacgroundWhite, styles.paddingVertical, styles.radius, styles.marginTop,styles.shadow]}>
      <Text style={[styles.DescText]}>{object.heading}</Text>   
      <View>
            {
                object.description && (
                   <View>
                     <Text style={[styles.marginTop, styles.para]}>{object.description}</Text>
                    </View>
                )
            }
      </View>
      <View>
        {object.points && object.points.map((item, index) => (
          <View key={index} style={[styles.flex, styles.smallGap, styles.marginTop]}>
            <FontAwesome name="circle" size={8} color="black" />
            <Text style={styles.para}>{item}</Text>
          </View>
        ))}
      </View>

      <View>
        {object.sellerName && object.fssaiNumber && object.address && object.customerCare && (
          <View>
            <Text style={[styles.Gray, styles.salesText]}>Seller Name: {object.sellerName}</Text>
            <Text style={[styles.Gray, styles.salesText]}>FSSAI Number: {object.fssaiNumber}</Text>
            <Text style={[styles.Gray, styles.salesText]}>Address: {object.address}</Text>
            <Text style={[styles.Gray, styles.salesText]}>Customer Care: {object.customerCare}</Text>
            <TouchableOpacity style={styles.flex}>
            <MaterialCommunityIcons name="minus" size={24} style={styles.Orange} />
            <Text style={[styles.headerText,styles.Orange]}>Show Less</Text> 
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
