import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import {useDebounce} from 'use-debounce';

import {AppInput} from '../../components/AppInput';
import {CustomAppBar} from '../../components/CustomAppBar';
import {UserCard} from '../../components/UserCard';

import {useUsers} from '../../hooks/useUsers';

import IconEmptyResults from '../../assets/icons/empty-results.svg';

export const UserScreen = () => {
  const [search, setSearch] = useState('');
  const [debounceValue] = useDebounce(search, 500);

  const {isLoading, users} = useUsers({debounceValue});

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomAppBar />

        <Text className="text-primary font-poppinsMedium text-[36px] mt-[46px] px-[20px]">
          Descubre
        </Text>

        <AppInput
          value={search}
          onChangeText={setSearch}
          placeholder="Busca un usario en github..."
        />

        {isLoading ? (
          <View className="items-center mt-[160px]">
            <Text className="text-primary font-poppinsRegular text-center text-[16px]">
              Cargando...
            </Text>
          </View>
        ) : (
          <>
            {users === null ? (
              <View className="items-center justify-center mt-[200px]">
                <IconEmptyResults />
                <Text className="text-primary font-poppinsRegular text-center text-[16px] leading-none">
                  No hay resultados
                </Text>
                <Text className="text-secondary font-poppinsRegular text-center text-[14px] mt-[2px]">
                  Busque un usuario
                </Text>
              </View>
            ) : (
              <View className="px-[20px] gap-[16px] pt-[20px] pb-[20px]">
                {users.items.map(user => {
                  return <UserCard key={user.id} data={user} />;
                })}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
