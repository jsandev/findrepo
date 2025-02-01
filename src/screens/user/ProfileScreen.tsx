import {
  Text,
  View,
  Pressable,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps, useFocusEffect} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {RootStackParamList, UserStackParamList} from '../../navigation/types';

import {userService} from '../../services/user';
import {IUserProfile} from '../../models';

import IconMapPin from '../../assets/icons/map-pin.svg';
import IconCalendar from '../../assets/icons/calendar.svg';
import IconLink from '../../assets/icons/link.svg';
import IconEmail from '../../assets/icons/email.svg';
import IconChevronLeft from '../../assets/icons/chevron-left.svg';
import IconPackage from '../../assets/icons/package.svg';

import {IUserRepo} from '../../models/repo.model';
import {RepoCard} from '../../components/RepoCard';

type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<UserStackParamList, 'Profile'>,
  NativeStackScreenProps<RootStackParamList>
>;

export const ProfileScreen = ({navigation, route}: ProfileScreenProps) => {
  const {userName} = route.params;

  const dimensions = useWindowDimensions();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IUserProfile | null>(null);
  const [repos, setRepos] = useState<IUserRepo[]>([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setIsLoading(true);

          const responseProfile = await userService.getUserProfile(userName);
          setData(responseProfile.data);

          const responseRepos = await userService.getReposByUser(userName);
          setRepos(responseRepos.data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }, [userName]),
  );

  if (isLoading || data === null) {
    return (
      <SafeAreaView className="bg-white w-full h-full justify-center items-center">
        <Text className="text-primary font-poppinsRegular text-center text-[16px]">
          Cargando...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-white w-full h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="bg-primary w-full rounded-b-[40px]"
          style={{height: dimensions.height * 0.3}}>
          <Pressable
            className="w-[32px] h-[32px] rounded-full bg-white justify-center items-center mt-[20px] ml-[20px]"
            onPress={() => navigation.goBack()}>
            <IconChevronLeft />
          </Pressable>
        </View>
        <View className="items-center px-[20px]">
          <Image
            className="w-[168px] h-[168px] rounded-[8px] -mt-[136px]"
            src={data.avatar_url}
          />
          <Text className="text-primary font-poppinsMedium text-center text-[20px] leading-none mt-[14px] mb-[10px]">
            {data.name}
          </Text>
          <Text className="text-secondary font-poppinsRegular text-center text-[14px] leading-none">
            {data.login}
          </Text>
          {!!data.bio && (
            <Text className="text-primary font-poppinsRegular text-center text-[14px] mt-[24px]">
              {data.bio}
            </Text>
          )}
        </View>

        <View className="gap-[20px] mt-[40px] px-[20px]">
          <Text className="text-secondary font-poppinsRegular text-[14px]">
            Perfil
          </Text>

          <View className="w-full gap-[10px]">
            {!!data.location && (
              <View className="flex-row items-center gap-[10px]">
                <IconMapPin width={18} color="#B0B0B0" />
                <Text className="text-primary font-poppinsRegular text-[14px]">
                  {data.location}
                </Text>
              </View>
            )}
            {!!data.blog && (
              <View className="flex-row items-center gap-[10px]">
                <IconLink width={18} color="#B0B0B0" />
                <Text className="text-primary font-poppinsRegular text-[14px]">
                  {data.blog}
                </Text>
              </View>
            )}
            {!!data.email && (
              <View className="flex-row items-center gap-[10px]">
                <IconEmail width={18} color="#B0B0B0" />
                <Text className="text-primary font-poppinsRegular text-[14px]">
                  {data.email}
                </Text>
              </View>
            )}
            <View className="flex-row items-center gap-[10px]">
              <IconCalendar width={18} color="#B0B0B0" />
              <Text className="text-primary font-poppinsRegular text-[14px]">
                Se unió a github:{' '}
                {new Date(data.created_at).toLocaleDateString('es-PE', {
                  year: 'numeric',
                  day: '2-digit',
                  month: 'long',
                })}
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-[20px] mt-[40px] px-[20px] pb-[20px]">
          <Text className="text-secondary font-poppinsRegular text-[14px]">
            Repositorios{repos.length > 0 ? ` (${repos.length})` : ''}
          </Text>

          {repos.length === 0 ? (
            <View className="items-center">
              <IconPackage color="#B0B0B0" />
              <Text className="text-primary font-poppinsRegular text-center text-[14px]">
                No tiene repositorios
              </Text>
            </View>
          ) : (
            repos.map(repo => {
              return <RepoCard key={repo.id} data={repo} />;
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
