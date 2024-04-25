import { QueryKey } from '../../../constants/queryKey';
import { useInfiniteQuery } from "react-query";
import { getCharacters } from "../queryApi";
import { useState } from "react";
import { getIdFromUrl } from "../components/AdditionalInfoModal/utils/getIdFromUrl";

export const useGetCharactersForEpisode = (characters: string[]) => {
    const batchSize = 3;
    const [startIndex, setStartIndex] = useState(0);

    const fetchCharactersPage = async () => {
        const endIndex = startIndex + batchSize;
        const urlsBatch = characters.slice(startIndex, endIndex);
        setStartIndex(endIndex);
        const ids = urlsBatch.map((url) => getIdFromUrl(url))
        const data = await getCharacters(ids);
        return data?.data || [];
    };

    const {
        data,
        ...rest
    } = useInfiniteQuery([QueryKey.GetCharactersForEpisode, characters], fetchCharactersPage, {
        getNextPageParam: () => {
            const length = characters.length
            return startIndex < length
        },
    });

    const results = data?.pages.flat()

    return {
        data: results,
        ...rest
    };
};
