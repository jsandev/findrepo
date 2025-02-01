import {NavigatorScreenParams} from '@react-navigation/native';

export type UserStackParamList = {
  User: undefined;
  Profile: {userName: string};
};

export type RootStackParamList = {
  UserStack: NavigatorScreenParams<UserStackParamList>;
  Repo: undefined;
};
