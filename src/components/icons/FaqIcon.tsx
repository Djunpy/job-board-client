import { ISvgIcon } from '@/types/SVGIcon'

type Props = {}

function FaqIcon({width, height, fill, classes}: ISvgIcon) {
	return (
		<svg className={classes} fill={fill} height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M11.0012 8.98117C11.0001 8.99389 11 9.00016 11 9.00016C11 9.55244 10.5523 10 10 10C9.44772 10 9 9.55228 9 9C9 8.56589 9.15145 7.86505 9.57527 7.24697C10.0356 6.5756 10.8267 6 12 6C13.1259 6 13.9261 6.49153 14.4115 7.1657C14.8602 7.78887 15 8.50664 15 9C15 10.3091 14.5154 11.2005 13.7829 12.1222C13.5525 12.4121 13.3244 12.7529 13.1489 13.0312C13.0625 13.1682 12.9916 13.2857 12.9428 13.3682C12.9184 13.4094 12.8996 13.4417 12.8872 13.4631L12.8736 13.4867L12.8707 13.4919M12.8707 13.4919C12.5987 13.9725 11.9882 14.1423 11.5076 13.8704C11.0269 13.5984 10.8577 12.9883 11.1296 12.5076L11.9993 12.9996C11.1296 12.5076 11.1296 12.5076 11.1296 12.5076L11.1321 12.5033L11.1373 12.4942L11.1556 12.4623C11.1713 12.4352 11.1937 12.3967 11.222 12.3489C11.2785 12.2535 11.3591 12.1199 11.4571 11.9645C11.6503 11.6581 11.9222 11.2489 12.2171 10.8778C12.7931 10.1531 13 9.69092 13 9C13 8.82669 12.9398 8.54447 12.7885 8.3343C12.6739 8.17513 12.4741 8 12 8C11.5733 8 11.3644 8.1744 11.2247 8.37803C11.1442 8.49551 11.0848 8.63083 11.0463 8.76065C11.0274 8.82427 11.0152 8.88119 11.008 8.9268C11.0044 8.9494 11.0023 8.96768 11.0012 8.98117" fill={fill} fillRule="evenodd"/><path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" fill={fill}/><path clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill={fill} fillRule="evenodd"/></svg>
	)
}

export default FaqIcon