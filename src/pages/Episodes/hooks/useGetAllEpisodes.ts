
import { useQuery } from 'react-query'

import { QueryKey } from '../../../constants';
import { getAllEpisodes } from '../queryApi';

export const useGetAllEpisodes = (page: number) => {
  const { data, ...rest } = useQuery({
    queryKey: [QueryKey.GetAllEpisodes, page],
    queryFn: () => getAllEpisodes(page),
    keepPreviousData: true,
  });

  const { count } = data?.data?.info || {}
  const { results } = data?.data || {}

  return {
    data: results,
    total: count,
    ...rest,
  }
}
