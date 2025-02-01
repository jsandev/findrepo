import React from 'react';
import {Image, Platform, Pressable, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {UserStackParamList} from '../navigation/types';

import {IUserReponse} from '../models';

import IconArrowRight from '../assets/icons/arrow-right.svg';
import IconBug from '../assets/icons/bug.svg';
import IconUser from '../assets/icons/user.svg';

type UserScreenNavigationProp = NativeStackNavigationProp<
  UserStackParamList,
  'User'
>;

interface IProps {
  data: IUserReponse;
}
export const UserCard: React.FC<IProps> = ({data}) => {
  const navigation = useNavigation<UserScreenNavigationProp>();

  const {avatar_url, login, node_id, type} = data;
  const isPersonalAccount = type.toUpperCase() === 'USER';

  return (
    <Pressable
      key={data.id}
      className="w-full bg-white flex-row items-center gap-[10px] py-[12px] px-[16px] rounded-[16px] border border-[#DDD]"
      onPress={() => navigation.navigate('Profile', {userName: data.login})}
      style={{
        elevation: 15,
        shadowColor:
          Platform.OS === 'android' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.8)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 6,
      }}>
      <View className="w-[80px] h-[80px] rounded-[10px] overflow-hidden border border-[#DDD]">
        {avatar_url ? (
          <Image
            className="w-[80px] h-[80px] object-cover object-center"
            src={avatar_url}
          />
        ) : (
          <Image
            className="w-[80px] h-[80px] object-cover object-center"
            source={require('../assets/avatar_default.png')}
          />
        )}
      </View>
      <View className="flex-1 justify-between">
        <View className="mb-[16px]">
          <Text className="text-primary font-poppinsRegular text-[14px]">
            {login}
          </Text>
          <Text className="text-secondary font-poppinsRegular text-[10px]">
            ID: {node_id}
          </Text>
        </View>

        <View className="flex-row items-center gap-[10px]">
          <View className="flex-row items-center gap-[4px]">
            {isPersonalAccount ? (
              <IconUser width={12} color="#1C1C1C" />
            ) : (
              <IconBug width={12} color="#1C1C1C" />
            )}
            <Text className="text-primary font-poppinsRegular text-[12px] leading-none">
              Cuenta: {isPersonalAccount ? 'Personal' : 'Organización'}
            </Text>
          </View>
        </View>
      </View>

      <IconArrowRight width={24} />
    </Pressable>
  );
};
