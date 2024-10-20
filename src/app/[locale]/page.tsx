import { Metadata, NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

interface Props {}

export async function generateMetadata({ params: {locale} }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
		description: t('description')
  };
}

const Page: NextPage<Props> = ({}) => {
	console.log('home page')
	return <div>home page 444</div>
}

export default Page