import styles from '@/styles/components/header-nav.module.scss'
import { INavItemProps } from '@/types/header'
import Link from 'next/link'


function HeaderNavItem({title, icon: Icon, path, handle}: INavItemProps) {
	return (
		<li className={styles.nav_item}>
			{
				path
				? 
					<Link href={path}>
						<Icon classes={styles.nav_icon}/> 
					</Link>
				:
					<button onClick={handle}>
						<Icon classes={styles.nav_icon}/>
					</button>
			}
		</li>
	)
}


export default HeaderNavItem