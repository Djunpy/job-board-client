import { IHomePageDesc } from '@/types/SEO'

const homePageDescData: IHomePageDesc = {
	ru: "Описание главной страницы",
	en: 'description of the main page',
	uk: 'опис головної сторінки'
}

export function getHomePageDescByLang(lang: string): string {
	const description = homePageDescData[lang]
	if (description){
		return description
	}
  return ""
}