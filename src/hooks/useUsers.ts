import {useEffect, useState} from 'react';

import {userService} from '../services/user';
import {IListOfUser} from '../models';

interface IProps {
  debounceValue: string;
}
export const useUsers = ({debounceValue}: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<IListOfUser | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (debounceValue === '') {
          setUsers(null);
          return;
        }

        const response = await userService.getUserByName(debounceValue);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [debounceValue]);

  return {users, isLoading};
};
