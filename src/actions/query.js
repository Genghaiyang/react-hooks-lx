const actions = {
	
	//设置乘车日期
	setDate(date) {
		return {
			type: 'ACTION_SET_DATE',
			payload: date
		}
	},

	//设置高铁动车开关
	setHighSpeed(bool) {
		return {
			type: 'ACTION_SET_HIGHSPEED',
			payload: bool
		}
	}
}
export default actions
