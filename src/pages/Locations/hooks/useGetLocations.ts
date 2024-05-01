
import { useQuery } from '@apollo/client';

import { GET_ALL_LOCATIONS } from '../queryApi';

export const useGetLocations = (page: number) => {
  const { loading, error, data, ...rest } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page },
    fetchPolicy: 'cache-and-network',
  });

  const locations = data?.locations?.results || [];
  const total = data?.locations?.info?.count || 0;

  return {
    loading,
    error,
    data: locations,
    total,
    ...rest,
  };
};
