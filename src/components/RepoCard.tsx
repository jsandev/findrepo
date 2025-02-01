import {Image, Platform, Text, View} from 'react-native';
import React from 'react';

import {IUserRepo} from '../models/repo.model';

import IconCode from '../assets/icons/code.svg';
import IconIssue from '../assets/icons/issue.svg';
import IconStar from '../assets/icons/star.svg';

interface IProps {
  data: IUserRepo;
}
export const RepoCard: React.FC<IProps> = ({data}) => {
  const {
    owner,
    full_name,
    description,
    topics,
    language,
    stargazers_count,
    open_issues_count,
  } = data;

  return (
    <View
      className="bg-white w-full shadow-sm rounded-[10px] px-[14px] py-[10px] border border-[#DDD]"
      style={{
        elevation: 15,
        shadowColor:
          Platform.OS === 'android' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.8)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 6,
      }}>
      <View>
        <View className="flex-row gap-[10px] items-center">
          {owner.avatar_url ? (
            <Image
              className="w-[22px] h-[22px] rounded-full border border-[#DDD] object-cover object-center"
              src={owner.avatar_url}
            />
          ) : (
            <Image
              className="w-[22px] h-[22px] rounded-full border border-[#DDD] object-cover object-center"
              source={require('../assets/avatar_default.png')}
            />
          )}
          <Text className="text-primary font-poppinsRegular text-[14px]">
            {full_name}
          </Text>
        </View>

        {!!description && (
          <Text className="text-primary font-poppinsRegular text-[14px] mt-[8px] mb-[6px]">
            {description}
          </Text>
        )}

        {topics.length > 0 && (
          <View className="flex-row gap-x-[8px] flex-wrap">
            {topics.map((topic, i) => {
              return (
                <Text
                  key={i}
                  className="text-secondary font-poppinsRegular text-[14px] leading-none mb-[6px]">
                  #{topic}
                </Text>
              );
            })}
          </View>
        )}

        <View className="flex-row items-center gap-[10px] mt-[10px]">
          {!!language && (
            <>
              <View className="flex-row items-center gap-[4px]">
                <IconCode width={12} color="#B0B0B0" />
                <Text className="text-primary font-poppinsRegular text-[12px] leading-none">
                  {language}
                </Text>
              </View>
              <Text className="text-primary font-poppinsRegular text-[14px] leading-none">
                ·
              </Text>
            </>
          )}
          <View className="flex-row items-center gap-[4px]">
            <IconStar width={12} color="#B0B0B0" />
            <Text className="text-primary font-poppinsRegular text-[12px] leading-none">
              {stargazers_count}
            </Text>
          </View>
          <Text className="text-primary font-poppinsRegular text-[14px] leading-none">
            ·
          </Text>
          <View className="flex-row items-center gap-[4px]">
            <IconIssue width={12} color="#B0B0B0" />
            <Text className="text-primary font-poppinsRegular text-[12px] leading-none">
              {open_issues_count}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
