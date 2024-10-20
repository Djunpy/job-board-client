'use client'
import { useLoginMutation } from '@/redux/services/authService'
import { ILoginReq } from '@/types/auth'
import { IApiErrorResp } from '@/types/common'
import { Button, Input } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import EyeIcon from '../icons/EyeIcon'
import EyeOffIcon from '../icons/EyeOffIcon'

type Inputs = {
	login: string
	password: string
}

function SignInForm({}: {}) {
	const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
	const [loginError, setLoginError] = useState<string>('')
	const [passwordError, setPasswordError] = useState<string>('')



	const { register, handleSubmit, reset, formState: { errors } } = useForm<ILoginReq>();

	// const [
	// 	login,
	// 	{ error: loginError, isError: loginIsError, data: loginData },
	// 	{ isError: loginIsError, isSuccess: loginIsSuccess, error: loginError, },
	// ] = useLoginMutation()

	const [
		login,
		{ isLoading },
	] = useLoginMutation()

	console.log(errors)
  const onSubmit: SubmitHandler<ILoginReq> = async data => {
		setLoginError("")
		setPasswordError("")
		try {
			await login(data).unwrap()
			reset()
		}catch(error) {
			const apiError = error as IApiErrorResp
			const errCode = apiError.data.code
			if (errCode === -1) {
				setLoginError('Пользователь не найден')
			} else if (errCode === 13) {
				setPasswordError('Не верный пароль')
			}
		}
	};


	const toggleVisibility = () => setIsVisiblePassword(!isVisiblePassword);


	return (
		<form className='flex flex-col items-center gap-y-3 w-[400px] bg-gray-50 h-72 rounded-xl p-5' onSubmit={handleSubmit(onSubmit)}>
			<Input
			className='w-full'
			errorMessage={loginError}
			isInvalid={loginError ? true : false}
			type="text"
			label="Login"
			{...register('login', { required: 'Это поле обязательно для заполнения' })} 

			 />
			<Input className='w-full'
				isInvalid={passwordError ? true : false}
				errorMessage={passwordError}
				endContent={
					<button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
						{isVisiblePassword ? (
							<EyeOffIcon classes="text-2xl text-default-400 pointer-events-none w-8 fill-gray-500" />
						) : (
							<EyeIcon classes="text-2xl text-default-400 pointer-events-none w-8 fill-gray-500" />
						)}
					</button>
				}
				type={isVisiblePassword ? "text" : "password"}
				label="Password" 
				{...register('password', {required: 'Это поле обязательно для заполнения'})}
			/>
			<Link className='text-gray-400 text-end ml-auto' href={`/forgot-password`}>забыли пароль ?</Link>
			<Button type='submit' className='w-full' color="primary" isLoading={isLoading}>
      	Loading
    	</Button>
		</form>
	)
}

export default SignInForm