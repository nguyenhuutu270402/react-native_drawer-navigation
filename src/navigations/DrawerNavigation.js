import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from './CustomDrawer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import History from '../screens/History';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
                drawerActiveBackgroundColor: 'white',
                drawerActiveTintColor: '#1a68b3',
                drawerInactiveTintColor: 'white'
            }}>

            <Drawer.Screen name="Home" component={Home} options={{
                headerShown: true,
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={24} color={color} />
                )
            }}
            />
            <Drawer.Screen name="History" component={History} options={{
                headerShown: true,
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="history" size={24} color={color} />
                )
            }} />

            <Drawer.Screen name="Profile" component={Profile} options={{
                headerShown: true,
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="switch-account" size={24} color={color} />
                )
            }} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation
