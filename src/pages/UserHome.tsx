import { NextPage } from 'next'

interface Props {}

const UserHome: NextPage<Props> = ({}) => {
	console.log('home page')
	return <div>user home page</div>
}

export default UserHome