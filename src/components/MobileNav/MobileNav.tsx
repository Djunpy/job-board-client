import { useAppSelector } from '@/redux/hooks'
import { selectIsOpenMenu } from '@/redux/reducers/headerSlice'
import commonStyles from '@/styles/base/common.module.scss'
import styles from '@/styles/components/mobile-nav.module.scss'
import { INavProps } from '@/types/header'
import classNames from 'classnames'
import MobileNavItem from './MobileNavItem'




function MobileNav({items}: INavProps) {
	const isOpenMenu = useAppSelector(selectIsOpenMenu)
	const mobileNavClasses = classNames(styles.nav, commonStyles.bg, {
		[styles.is_open_menu]: isOpenMenu
	})
	return (
		<ul className={mobileNavClasses}>
			{
				items.map((item) => (
					<MobileNavItem key={item.id} title={item.title} path={item.path} handle={item.handle} id={item.id} icon={item.icon}/>
				))
			}
		</ul>
	)
}

export default MobileNav