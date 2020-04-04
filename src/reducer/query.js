import useDateFormat from '../utils/useDateFormat'
const initStore = {
	/* 	from: '北京',
	to: '上海', */
	departDate: useDateFormat(Date.now()),
	highSpeed: false,
	isPrevDisabled: true,
	isNextDisabled: false
}
const query = (state = initStore, action) => {
	switch (action.type) {
		//设置乘车日期
		case 'ACTION_SET_DATE':
			return {
				...state,
				departDate: action.payload
			}
		//设置高铁动车
		case 'ACTION_SET_HIGHSPEED':
			return {
				...state,
				highSpeed: action.payload
			}
		//设置前一天按钮
		case 'ACTION_SET_PREVDISABLED':
			return {
				...state,
				isPrevDisabled: action.payload
			}
		//设置后一天按钮
		case 'ACTION_SET_NEXTDISABLED':
			return {
				...state,
				isNextDisabled: action.payload
			}

		default:
			return state
	}
}
export default query
