import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

import IconSearch from '../assets/icons/search.svg';

interface IProps extends TextInputProps {}

export const AppInput = React.forwardRef<TextInput, IProps>(
  ({value, onChangeText, ...props}, ref) => {
    return (
      <View className="w-full relative px-[20px]">
        <TextInput
          ref={ref}
          {...props}
          keyboardType="web-search"
          value={value}
          onChangeText={onChangeText}
          className="bg-[#F7F7F7] h-[46px] rounded-[16px] placeholder:text-secondary placeholder:text-[14px] px-[18px]"
        />

        <View className="absolute top-[50%] -translate-y-1/2 right-[36px]">
          <IconSearch />
        </View>
      </View>
    );
  },
);
