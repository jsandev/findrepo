import {useEffect, useState} from 'react';
import {IListOfRepos} from '../models/repo.model';
import {repoService} from '../services/repo';

interface IProps {
  debounceValue: string;
}
export const useRepo = ({debounceValue}: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IListOfRepos | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        if (debounceValue === '') {
          setData(null);
          return;
        }

        const response = await repoService.searchRepo(debounceValue);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [debounceValue]);

  return {isLoading, data};
};
