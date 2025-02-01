import {Text, View} from 'react-native';

import Logo from '../assets/icons/logo-white.svg';

export const CustomAppBar = () => {
  return (
    <View className="w-full flex-row justify-between items-center pt-[20px] px-[20px]">
      <View>
        <Text className="text-primary font-poppinsMedium text-[18px] leading-none">
          Hola,
        </Text>
        <Text className="text-secondary font-poppinsMedium text-[18px] leading-none">
          Bienvenido
        </Text>
      </View>

      <Logo width={46} height={46} />
    </View>
  );
};
