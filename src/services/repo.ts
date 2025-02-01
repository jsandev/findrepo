import {AxiosResponse} from 'axios';

import {apiService} from '../config/api';

import {IListOfRepos} from '../models/repo.model';

const searchRepo = (repo: string): Promise<AxiosResponse<IListOfRepos>> => {
  return apiService.get(`/search/repositories?q=${repo}`);
};

export const repoService = {
  searchRepo,
};
