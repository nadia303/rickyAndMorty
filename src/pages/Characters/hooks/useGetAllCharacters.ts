import { useQuery } from "react-query"
import { getAllCharacters } from "../queryApi";
import { QueryKey } from "../../../constants";
import { Gender } from "../../../types/gender";
import { Status } from "../../../types/status";

interface GetAllCharactersProps {
  page: number;
  searchQuery?: string
  selectedGender?: Gender
  selectedStatus?: Status
}

export const useGetAllCharacters = ({ page, searchQuery, selectedGender, selectedStatus }: GetAllCharactersProps) => {
  const { data, ...rest } = useQuery({
    queryKey: [QueryKey.GetAllCharacters, page, searchQuery, selectedGender, selectedStatus],
    queryFn: () => getAllCharacters({ page, searchQuery, selectedGender, selectedStatus }),
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
