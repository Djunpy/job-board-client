import { GATEWAY_API_URL } from '@/helpers/server/config'
import axios from 'axios'




export const axiosInstance = axios.create({
	baseURL: GATEWAY_API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
})

axiosInstance.interceptors.request.use(
	async (config) => {
		console.log('response config', config)
		// const csrfToken = Cookies.get('csrf_token')
		// if (csrfToken){
		// 	config.headers['X-CSRF-Token'] = csrfToken;
		// }
		return config
	}, (error) => {
		return Promise.reject(error)
	}
)

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response && error.response.status === 401){
			window.location.href = '/sign-in'
		}
		return Promise.reject(error)
	} 
)

