import useDateFormat from '../utils/useDateFormat'
const initStore = {
/* 	from: '北京',
	to: '上海', */
	departDate: useDateFormat(Date.now()),
	highSpeed: false
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

		

		default:
			return state
	}
}
export default query
