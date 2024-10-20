import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
	console.log('faq page')
	return <div>FAQ</div>
}

export default Page