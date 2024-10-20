import { GATEWAY_API_URL } from '@/helpers/server/config'
import {
	createApi,
	fetchBaseQuery,
	retry
} from '@reduxjs/toolkit/query/react'

import Cookies from 'js-cookie'

const baseQuery = fetchBaseQuery({
	baseUrl: GATEWAY_API_URL,
	credentials: 'include',
	prepareHeaders: (headers) => {
		const csrfToken = Cookies.get('csrf_token')
		if (csrfToken){
			headers.set('X-CSRF-Token', csrfToken)
		}
		return headers
	}
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	endpoints: () => ({}),
})
