import { gql } from '@apollo/client';

export const GET_ALL_LOCATIONS = gql`
  query GetLocations($page: Int!) {
    locations(page: $page) {
      info {
        count
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
    }
  }
`;


export const GET_CHARACTERS_BY_IDS = gql`
query GetCharactersByIds($ids: [ID!]!) {
  charactersByIds(ids: $ids) {
    id
    name
    status
    species
    type
    gender 
    image
    created
  }
}
`






