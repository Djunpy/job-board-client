import { ISvgIcon } from './SVGIcon'

export interface INavItemProps  {
	id: number
	title: string
	icon: React.ComponentType<ISvgIcon>
	path?: string
	handle?: () => void 
}

export interface INavProps {
	items: INavItemProps[]
}