import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../src/pages/home'
import { Passwords } from '../src/pages/passwords'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Início"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        }
                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />
            <Tab.Screen
                name="Senhas"
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}