import { useAppSelector } from '@/redux/hooks'
import { selectIsOpenMenu } from '@/redux/reducers/headerSlice'
import styles from '@/styles/components/menu-btn.module.scss'
import classNames from 'classnames'


type Props = {
	handle: () => void
}

function MenuBtn({handle}: Props) {
	const isOpenMenu = useAppSelector(selectIsOpenMenu)

	const menuIconClasses = classNames(styles.menu_icon, {
		[styles.is_open_menu]: isOpenMenu
	})


	return (
		<div className={menuIconClasses} onClick={handle}>
				<div></div>
				<div></div>
				<div></div>
		</div>
	)
}

export default MenuBtn