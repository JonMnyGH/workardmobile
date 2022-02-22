import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const workardInprogresGET = Constants =>
  fetch(
    `https://2viskd2gtg.execute-api.us-east-1.amazonaws.com/default/WorkardInprogress`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useWorkardInprogresGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://2viskd2gtg.execute-api.us-east-1.amazonaws.com/default/WorkardInprogress`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchWorkardInprogresGET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://2viskd2gtg.execute-api.us-east-1.amazonaws.com/default/WorkardInprogress`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};
