'use client'
import classNames from 'classnames'

import LogoIcon from '@/components/icons/LogoIcon'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectIsOpenMenu, toggleMenu } from '@/redux/reducers/headerSlice'
import commonStyles from '@/styles/base/common.module.scss'
import styles from '@/styles/components/header.module.scss'
import { INavItemProps } from '@/types/header'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import HelpModal from '../HelpModal/HelpModal'
import PostIcon from '../icons/PostIcon'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import ProfileDropdown from '../UI/ProfileDropdown'


type Props = {

}

const data_nav: INavItemProps[] = [
	{
		id: 1,
		title: 'Сообщения',
		path: '/messages',
		icon: PostIcon
	},
	{
		id: 2,
		title: 'Уведомления',
		path: '',
		icon: PostIcon,
		handle: () => console.log('Уведомления')

	},
	{
		id: 3,
		title: 'Избранное',
		path: '/bookmarks',
		icon: PostIcon,
	},
]


function Header({}: Props) {
	const dispatch = useAppDispatch()
	const isOpenMenu = useAppSelector(selectIsOpenMenu)
	const [isOpenHelpModal, setIsOpenHelpModal] = useState<boolean>(false)

	//
	const t = useTranslations('Header');


	const headerClasses = classNames(styles.header)

	const downHeaderClasses = classNames(styles.down_header, commonStyles.text, commonStyles.bg)

	const topHeaderClasses = classNames(styles.top_header)

	const handleMenu = () => {
		dispatch(toggleMenu())
	}

	const handleHelpModal = () => {
		setIsOpenHelpModal(!isOpenHelpModal)
	}

	return (
		<header >
			<HelpModal isOpen={isOpenHelpModal} handle={handleHelpModal}>
				<p>content</p>
			</HelpModal>
			<div className={topHeaderClasses}>
				<button onClick={handleHelpModal}>{t('name_help')}</button>
				<SelectLanguage/>
			</div>
			<div className={downHeaderClasses}>
				<div className={classNames(styles.logo_wrap)}>
					<Link href='/'>
					<LogoIcon classes={styles.logo_icon}/>
					</Link>
				</div>
				<div >
				<nav className='ml-auto'>
					<ul className='flex gap-x-5 items-center'>
						<li>
							<ProfileDropdown isFullUserInf={!isOpenMenu}/>
						</li>
					</ul>
					{/* <MobileNav items={data_nav}/>
					<HeaderNav items={data_nav}/> */}
				</nav>
				{/* <MenuBtn handle={handleMenu}/> */}
				</div>
			</div>
		</header>
	)
}

export default Header