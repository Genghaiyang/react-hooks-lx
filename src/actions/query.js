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
    },

    //设置前一天按钮
	setPrevDisabled(bool) {
		return {
			type: 'ACTION_SET_PREVDISABLED',
			payload: bool
		}
    },

    //设置后一天按钮
	setNextDisabled(bool) {
		return {
			type: 'ACTION_SET_NEXTDISABLED',
			payload: bool
		}
    },
    
}
export default actions
