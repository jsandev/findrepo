import {Platform, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RepoScreen} from '../screens/repo/RepoScreen';

import IconUsers from '../assets/icons/users.svg';
import IconPackage from '../assets/icons/package.svg';
import {colorsTailwind} from '../styles/ui';
import {UserStackNavigator} from './UserStackNavigator';
import {RootStackParamList} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70 + insets.bottom,
          backgroundColor: '#FFFFFF',
          elevation: 15,
          shadowColor:
            Platform.OS === 'android' ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.8)',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 6,
          borderTopColor: '#FFFFFF',
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="UserStack"
        component={UserStackNavigator}
        options={{
          title: 'Usuarios',
          tabBarActiveTintColor: colorsTailwind.primary,
          tabBarInactiveTintColor: colorsTailwind.secondary,
          tabBarIcon: ({focused}) => (
            <IconUsers
              color={
                focused ? colorsTailwind.primary : colorsTailwind.secondary
              }
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Poppins-Medium',
          },
          tabBarButton: props => (
            <Pressable
              {...props}
              style={({pressed}) => [{opacity: pressed ? 1 : 1}]}
              className="items-center justify-center"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Repo"
        component={RepoScreen}
        options={{
          title: 'Repositorios',
          tabBarActiveTintColor: colorsTailwind.primary,
          tabBarInactiveTintColor: colorsTailwind.secondary,
          tabBarIcon: ({focused}) => (
            <IconPackage
              color={
                focused ? colorsTailwind.primary : colorsTailwind.secondary
              }
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
            fontFamily: 'Poppins-Medium',
          },
          tabBarButton: props => (
            <Pressable
              {...props}
              style={({pressed}) => [{opacity: pressed ? 1 : 1}]}
              className="items-center justify-center"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
