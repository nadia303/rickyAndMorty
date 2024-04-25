
import { useQuery } from "react-query"
import { getAllEpisodes } from "../queryApi";
import { QueryKey } from "../../../constants";

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
