import styles from '@/styles/components/header-nav.module.scss'
import { INavProps } from '@/types/header'
import classNames from 'classnames'
import HeaderNavItem from './HeaderNavItem'


function HeaderNav({items}: INavProps) {
	const navClasses = classNames(styles.nav)
	return (
		<ul className={navClasses}>
			{
				items.map((item) => (
					<HeaderNavItem key={item.id} title={item.title} path={item.path} handle={item.handle} id={item.id} icon={item.icon}/>
				))
			}
		</ul>
	)
}

export default HeaderNav