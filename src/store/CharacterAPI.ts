import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacterResult } from '../types';

export const charactersApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ICharacterResult, { page: string; name: string }>({
      query: (arg: { page: string; name: string }) =>
        `character/?name=${arg.name}&page=${arg.page}`,
    }),
  }),
});
export const { useGetCharactersQuery } = charactersApi;
