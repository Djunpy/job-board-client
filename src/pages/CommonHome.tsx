import { NextPage } from 'next'

interface Props {}

const CommonHome: NextPage<Props> = ({}) => {
	console.log('home page')
	return <div>common home page</div>
}

export default CommonHome