import { Redirect, Slot } from 'expo-router';
export default function RootLayout() {
    const isAuth = false;
    if(!isAuth) return <Redirect href='/sign-in'/>
  return <Slot/>
}