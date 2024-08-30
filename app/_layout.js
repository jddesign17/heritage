import { View, Text } from 'react-native'
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  });

  
  if (!fontsLoaded) {
    return (
      <View></View>
    );
  }
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
