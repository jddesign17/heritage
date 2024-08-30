import { StyleSheet,Dimensions} from 'react-native'



const {width,height} = Dimensions.get("window")

export const styles = StyleSheet.create({

    defaultPadding:{
        paddingHorizontal:width*0.03,
        overflow:'visible'
    },
    SilderPadding:{
        paddingHorizontal:width*0.02,
        overflow:'visible'
    },

    flex:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },

    largeGap:{
        gap:width*0.05
    },
    smallGap:{
        gap:width*0.02
    },

    headerText:{
        fontFamily:"Poppins-SemiBold",
        fontSize:width*0.045
    },
    DescText:{
        fontFamily:"Poppins-SemiBold",
        fontSize:width*0.043
    },
    para:{
        fontFamily:"Poppins-Medium",
        fontSize:width*0.038
    },
    para1:{
        fontFamily:"Poppins-Light",
        fontSize:width*0.038,
        color:'#6b6b6a'
    },
    strike:{
        textDecorationLine:'line-through'
    },
    salesText:{
        fontFamily:"Poppins-Medium",
        fontSize:width*0.038
    },
    salesText2:{
        fontFamily:"Poppins-Medium",
        fontSize:width*0.025,
        textAlign:'center'
    },
    DescText:{
        fontFamily:"Poppins-SemiBold",
        fontSize:width*0.043
    },
    btnText:{
        fontFamily:"Poppins-SemiBold",
        fontSize:width*0.039,
        color:'green',
        textTransform:'uppercase'
    },
    btnBox:{
        fontFamily:"Poppins-SemiBold",
        fontSize:width*0.045,
        color:'green',
        width:width*0.2,
        height:height*0.04,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#d0d0d0'
    },
    btnBox2:{
        fontFamily:"Poppins-SemiBold",
        fontSize:width*0.2,
        color:'green',
        width:width*0.35,
        height:height*0.05,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#d0d0d0'
    },
    justifyBetween:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:"row"
    },

    bacgroundWhite:{
        backgroundColor:'#ffffff'
    },
    bacgroundWhite1:{
        backgroundColor:'#000'
    },
    paddingHeader:{
        paddingVertical:height*0.016
    },
    paddingVertical:{
        paddingVertical:height*0.02
    },
    radius:{
        borderRadius:width*0.03
    },
    radiusbottom:{
        borderBottomLeftRadius:width*0.03,
        borderBottomRightRadius:width*0.03
    },
    radiusTop:{
        borderTopLeftRadius:width*0.03,
        borderTopRightRadius:width*0.03
    },
    radiusl:{
        borderTopLeftRadius:width*0.03
    },
    marginTop:{
        marginTop:height*0.01
    },
    Gray:{
        color:"#aeada0"
    },
    Orange:{
        color:'#ed6205'
    },
    sliderWidth:{
        width:width,
        height:height*0.5
    },
    Pagenation:{
        width:20,
        height:20,
        borderRadius:50,
        backgroundColor:'#fff',
        marginHorizontal:6
    },
    ImageSilder:{
        maxWidth:width*0.3,
        height:width*0.4,
        aspectRatio:1,
        resizeMode:'cover',

    },

    border:{
        borderWidth:1,
        borderColor:'#d0d0d0'
    }
    ,
    brand:{
        fontFamily:"Poppins-SemiBold",
        color:'#919190'
    },

    category:{
        fontFamily:'Poppins-SemiBold',
        fontSize:width*0.039,
        fontWeight:"200"
    },
    OfferBox:{
        width:width*0.1,
        height:width*0.12,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ed6205',
        top:0,
        left:0,
        position:"absolute",
        

    
    },
    OfferBox2:{
        width:width*0.1,
        height:width*0.1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#99009c',
        top:0,
        right:0,
        position:"absolute",
        borderRadius:100,
        margin:width*0.01
        

    
    },
    white:{
        color:'white',
        textTransform:"uppercase"
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom:height*0.03
        
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: Dimensions.get('window').width * 0.8,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    
      },
      dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      },
      dot: {
        borderRadius: 6, 
        marginHorizontal: 5,
      },
      shadow:{
        elevation:1,
      }

})