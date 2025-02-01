import {Text, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import {useDebounce} from 'use-debounce';

import {AppInput} from '../../components/AppInput';
import {RepoCard} from '../../components/RepoCard';
import {CustomAppBar} from '../../components/CustomAppBar';

import {useRepo} from '../../hooks/useRepo';

import IconEmptyResults from '../../assets/icons/empty-results.svg';

export const RepoScreen = () => {
  const [search, setSearch] = useState('');
  const [debounceValue] = useDebounce(search, 250);

  const {isLoading, data} = useRepo({debounceValue});

  return (
    <SafeAreaView className="bg-white w-full h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomAppBar />

        <Text className="text-primary font-poppinsMedium text-[36px] mt-[46px] px-[20px]">
          Repositorios
        </Text>

        <AppInput
          value={search}
          onChangeText={setSearch}
          placeholder='"Busca un repositorio en github...'
        />

        {isLoading ? (
          <View className="items-center mt-[160px]">
            <Text className="text-primary font-poppinsRegular text-center text-[16px]">
              Cargando...
            </Text>
          </View>
        ) : (
          <>
            {data === null ? (
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
              <View className="px-[20px] gap-[16px] py-[20px]">
                {data.items.map(user => {
                  return <RepoCard key={user.id} data={user} />;
                })}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
