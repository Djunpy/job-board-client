import SignInForm from '@/components/SignInForm/SignInForm'
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
	return <div className='flex items-center justify-center flex-col gap-4 pt-48 w-full min-h-[100vh]'>
		<h1>Вход</h1>
		<SignInForm/>
		</div>
}

export default Page