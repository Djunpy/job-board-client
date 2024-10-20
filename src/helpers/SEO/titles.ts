import { IHomePageTitle } from '@/types/SEO'

const homePageTitleData: IHomePageTitle = {
	"ru": 'Работа, публикация вакансий, поиск работы',
	"en": 'Jobs, job postings, job search',
	"uk": 'Робота, публікація вакансій, пошук роботи'
}

export function getHomePageTitleByLang(lang: string): string {
	const title = homePageTitleData[lang]
	if (title){
		return title
	}
	return ""
}