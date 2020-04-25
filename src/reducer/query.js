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
	checkedTicketTypes: [],
	trainType: [],
	checkedTrainTypes: [],
	depStation: [],
	checkedDepartStations: [],
	arrStation: [],
	checkedArriveStations: [],
	isFiltersVisible: false,
	orderType: 1,
	onlyTickets: false,
	departTimeStart: 0,
	departTimeEnd: 24,
	arriveTimeStart: 0,
	arriveTimeEnd: 24,
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

		//设置综合筛选显示与隐藏
		case 'ACTION_SET_FILTERSVISIBLE':
			return {
				...state,
				isFiltersVisible: action.payload,
			}

		//设置选中的坐席类型
		case 'ACTION_SET_CHECKEDTICKETTYPES':
			return {
				...state,
				checkedTicketTypes: action.payload,
			}
		//设置选中的车次类型
		case 'ACTION_SET_CHECKEDTRAINTYPES':
			return {
				...state,
				checkedTrainTypes: action.payload,
			}
		//设置选中的出发车站
		case 'ACTION_SET_CHECKEDDEPSTATIONS':
			return {
				...state,
				checkedDepartStations: action.payload,
			}
		//设置选中的到达车站
		case 'ACTION_SET_CHECKEDARRSTATIONS':
			return {
				...state,
				checkedArriveStations: action.payload,
			}
		//设置选中的出发开始时间
		case 'ACTION_SET_DEPTIMESTART':
			return {
				...state,
				departTimeStart: action.payload,
			}
		//设置选中的出发结束时间
		case 'ACTION_SET_DEPTIMEEND':
			return {
				...state,
				departTimeEnd: action.payload,
			}
		//设置选中的到达开始时间
		case 'ACTION_SET_ARRTIMESTART':
			return {
				...state,
				arriveTimeStart: action.payload,
			}
		//设置选中的到达结束时间
		case 'ACTION_SET_ARRTIMEEND':
			return {
				...state,
				arriveTimeEnd: action.payload,
			}
		//设置耗时排序或者出发早晚排序
		case 'ACTION_SET_ORDERTYPE':
			return {
				...state,
				orderType: action.payload,
			}
		//设置只看有票
		case 'ACTION_SET_ONLYTICKETS':
			return {
				...state,
				onlyTickets: action.payload,
			}

		default:
			return state
	}
}
export default query
