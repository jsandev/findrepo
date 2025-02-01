import {AxiosResponse} from 'axios';

import {apiService} from '../config/api';

import {IListOfUser, IUserProfile} from '../models';
import {IUserRepo} from '../models/repo.model';

const getReposByUser = (name: string): Promise<AxiosResponse<IUserRepo[]>> => {
  return apiService.get(`/users/${name}/repos`);
};

const getUserByName = (name: string): Promise<AxiosResponse<IListOfUser>> => {
  return apiService.get(`/search/users?q=${name}`);
};

const getUserProfile = (name: string): Promise<AxiosResponse<IUserProfile>> => {
  return apiService.get(`/users/${name}`);
};

export const userService = {
  getReposByUser,
  getUserByName,
  getUserProfile,
};
