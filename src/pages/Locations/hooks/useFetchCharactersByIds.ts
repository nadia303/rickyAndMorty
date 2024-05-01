import { useState } from 'react';

import { useQuery } from '@apollo/client';

import { GET_CHARACTERS_BY_IDS } from '../queryApi';
import { Character } from '../../../types';

export const useFetchCharactersByIds = (initialIds: number[]) => {
  const [ids, setIds] = useState<number[]>(initialIds.slice(0, 3));
  const [startIndex, setStartIndex] = useState(3);
  const [characters, setCharacters] = useState<Character[]>([]);
  const hasMore = initialIds.length > startIndex

  const batchSize = 3;

  const handleLoadMore = () => {
    const endIndex = startIndex + batchSize;
    const urlsBatch = initialIds.slice(startIndex, endIndex);
    setStartIndex(endIndex);
    setIds(urlsBatch)
  };

  const { loading } = useQuery(GET_CHARACTERS_BY_IDS, {
    variables: { ids },
    skip: !initialIds.length,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setCharacters(prev => [...prev, ...data.charactersByIds])
    }
  });

  return { characters, fetchNextPage: handleLoadMore, loading, hasMore };
};
