import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const charactersApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: (arg) => `character/?name=${arg.name}&page=${arg.page}`,
        }),
    }),
});
export const { useGetCharactersQuery } = charactersApi;
