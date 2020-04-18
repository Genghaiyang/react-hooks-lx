import useDateFormat from '../utils/useDateFormat'
const initStore = {
	/* from: '北京',
	to: '上海',
	departDate: useDateFormat(Date.now()),
	highSpeed: false, */
	isPrevDisabled: true,
	isNextDisabled: false,
	trains: [],
	ticketType: [],
	trainType: [],
	depStation: [],
	arrStation: [],
}
const query = (state = initStore, action) => {
	switch (action.type) {
		//设置乘车日期
		/* case 'ACTION_SET_DATE':
			return {
				...state,
				departDate: action.payload,
			} */
		//设置高铁动车
		/* case 'ACTION_SET_HIGHSPEED':
			return {
				...state,
				highSpeed: action.payload,
			} */
		//设置前一天按钮
		case 'ACTION_SET_PREVDISABLED':
			return {
				...state,
				isPrevDisabled: action.payload,
			}
		//设置后一天按钮
		case 'ACTION_SET_NEXTDISABLED':
			return {
				...state,
				isNextDisabled: action.payload,
			}

		//设置车次信息列表
		case 'ACTION_SET_TRAINS':
			return {
				...state,
				trains: action.payload,
			}

		//设置车票座位类型
		case 'ACTION_SET_TICKETTYPE':
			return {
				...state,
				ticketType: action.payload,
			}

		//设置车辆类型
		case 'ACTION_SET_TRAINTYPE':
			return {
				...state,
				trainType: action.payload,
			}

		//设置始发站
		case 'ACTION_SET_DEPSTATION':
			return {
				...state,
				depStation: action.payload,
			}
		//设置到达站
		case 'ACTION_SET_ARRSTATION':
			return {
				...state,
				arrStation: action.payload,
			}

		default:
			return state
	}
}
export default query
