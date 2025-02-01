import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProfileScreen} from '../screens/user/ProfileScreen';
import {UserScreen} from '../screens/user/UserScreen';
import {UserStackParamList} from './types';

const UserStack = createNativeStackNavigator<UserStackParamList>();

export const UserStackNavigator = () => {
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen name="User" component={UserScreen} />
      <UserStack.Screen name="Profile" component={ProfileScreen} />
    </UserStack.Navigator>
  );
};
