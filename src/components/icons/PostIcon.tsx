import { ISvgIcon } from '@/types/SVGIcon'

type Props = {}

function PostIcon({width, height, fill, classes}: ISvgIcon) {
	return (
		<svg className={classes} width={width} height={height} fill={fill} data-name="Layer 1" id="Layer_1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><title/><path d="M91.48,20.13h-83A3.52,3.52,0,0,0,5,23.64V79.48A3.52,3.52,0,0,0,8.52,83h83A3.52,3.52,0,0,0,95,79.48V23.64A3.52,3.52,0,0,0,91.48,20.13Zm-1,2.81L53.87,59.6a5.5,5.5,0,0,1-7.78,0L9.47,22.94Zm1,57.25h-83a.7.7,0,0,1-.7-.7V25.26L44.15,61.6a8.31,8.31,0,0,0,11.75-.05L92.19,25.26V79.48A.7.7,0,0,1,91.48,80.19Z"/></svg>
	)
}

export default PostIcon