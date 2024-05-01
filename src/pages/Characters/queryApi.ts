import { api } from '../../api'
import { ResponseInfo } from '../../types';
import { Character } from '../../types';
import { Gender } from '../../types';
import { Status } from '../../types';

export interface AllCharactersResponse {
  data: {
    info: ResponseInfo;
    results: Character[];
  }
};

interface GetAllCharactersProps {
  page: number;
  searchQuery?: string;
  selectedGender?: Gender;
  selectedStatus?: Status;
}

export const getAllCharacters = ({ page, searchQuery, selectedGender, selectedStatus }: GetAllCharactersProps): Promise<AllCharactersResponse> => {
  let url = `character?page=${page}`;

  if (searchQuery) {
    url += `&name=${searchQuery}`;
  }

  if (selectedGender) {
    url += `&gender=${selectedGender}`;
  }

  if (selectedStatus) {
    url += `&status=${selectedStatus}`;
  }

  return api({
    method: 'get',
    url,
  })
}
