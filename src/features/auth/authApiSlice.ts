import Cookies from 'universal-cookie';
import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
      onSuccess: (response, credentials, api, extraOptions) => {
        const cookies = new Cookies();
        const accessToken = cookies.get('batchstt_jwt');
        console.log(accessToken);
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;

