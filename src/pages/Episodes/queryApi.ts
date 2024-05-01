import { api } from '../../api'
import { Episode, ResponseInfo, Character } from '../../types';

export interface AllEpisodesResponse {
  data: {
    info: ResponseInfo;
    results: Episode[];
  }
};

export interface CharacterResponse {
  data: Character[];
}

export const getAllEpisodes = (page: number): Promise<AllEpisodesResponse> => {
  return api({
    method: 'get',
    url: 'episode',
    params: { page },
  })
}

export const getCharacters = (ids: string[]): Promise<CharacterResponse> => {
  const allIds = ids.join(',')
  return api({
    method: 'get',
    url: `character/${allIds}`,
  })
}
