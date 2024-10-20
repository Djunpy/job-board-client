import { api } from '@/api/api'
import { AuthResp, ILoginReq } from '@/types/auth'


export const authApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<AuthResp, ILoginReq>({
			query: data => {
				console.log('data', data)
				return {
					url: '/auth/public/sign-in',
					method: 'POST',
					body: data,
				}
			},
		})
	}),
})

export const {useLoginMutation} = authApi

export const {
	endpoints: { login },
} = authApi
