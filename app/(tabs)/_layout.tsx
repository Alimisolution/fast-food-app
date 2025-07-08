import { useAuthStore } from '@/store/auth-store';
import { Redirect, Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';


export default function TabsLayout() {


  const {isAuthenticated} = useAuthStore();

    if(!isAuthenticated) return <Redirect href='/sign-in'/>
  return (
    <Tabs  
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginHorizontal: 20,
        height: 70,
        position: 'absolute',
        bottom: 40,
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#1a1a1a',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5
      },
      tabBarActiveTintColor: '#FE8C00',
      tabBarInactiveTintColor: '#666666',

    }}>
     
    <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({color }) => (
                    <Entypo name="home" size={30} color={color} />
                    )
                }}/>
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    tabBarIcon: ({color }) => (
                    <Feather name="search" size={30} color={color} />
                    )
                }}/>
            <Tabs.Screen
                name='cart'
                options={{
                    title: 'Cart',
                    tabBarIcon: ({color }) => (
                    <Feather name="shopping-cart" size={30} color={color} />
                    )
                }}/>
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color }) => (
                    <Ionicons name="person-circle" size={30} color={color} />
                    )
                }}/>
      
    </Tabs>
  )
}