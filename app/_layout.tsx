import { useAuthStore } from '@/store/auth-store';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import './global.css';


export default function RootLayout() {
  const {isLoading, fetchAuthenticateUser } = useAuthStore();

  const [fontsLoaded, error] = useFonts({
    "QuickSand-Bold": require('../assets/fonts/Quicksand-Bold.ttf'),
    "QuickSand-Medium": require('../assets/fonts/Quicksand-Medium.ttf'),
    "QuickSand-Regular": require('../assets/fonts/Quicksand-Regular.ttf'),
    "QuickSand-SemiBold": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "QuickSand-Light": require('../assets/fonts/Quicksand-Light.ttf'),
  });

  useEffect(() => {
    if(error) throw Error;
    if(fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error])

  useEffect(() => {
    fetchAuthenticateUser();
  }, [])

  if(!fontsLoaded || isLoading) return null;

  return <Stack screenOptions={{headerShown: false}}/>;
}
