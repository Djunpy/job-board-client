import styles from '@/styles/components/mobile-nav.module.scss'
import { INavItemProps } from '@/types/header'
import Link from 'next/link'


function MobileNavItem({title, icon: Icon, path, handle}: INavItemProps) {
	return (
		<li className={styles.nav_item}>
			{
				path
				? 
					<Link href={path}>
						<Icon classes={styles.nav_icon}/> <span>{title}</span>
					</Link>
				:
					<button onClick={handle}>
						<Icon classes={styles.nav_icon}/> <span>{title}</span>
					</button>
			}
		</li>
	)
}

export default MobileNavItem