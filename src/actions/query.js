const actions = {
	//设置乘车日期
	/* setDate(date) {
		return {
			type: 'ACTION_SET_DATE',
			payload: date,
		}
	}, */

	//设置高铁动车开关
	/* setHighSpeed(bool) {
		return {
			type: 'ACTION_SET_HIGHSPEED',
			payload: bool,
		}
	}, */

	//设置前一天按钮
	setPrevDisabled(bool) {
		return {
			type: 'ACTION_SET_PREVDISABLED',
			payload: bool,
		}
	},

	//设置后一天按钮
	setNextDisabled(bool) {
		return {
			type: 'ACTION_SET_NEXTDISABLED',
			payload: bool,
		}
	},

	//设置车次信息列表
	setTrainsList(list) {
		return {
			type: 'ACTION_SET_TRAINS',
			payload: list,
		}
	},

	//设置车票座位类型
	setTicketType(list) {
		return {
			type: 'ACTION_SET_TICKETTYPE',
			payload: list,
		}
	},

	//设置车辆类型
	setTrainType(list) {
		return {
			type: 'ACTION_SET_TRAINTYPE',
			payload: list,
		}
	},

	//设置始发站
	setDepstation(list) {
		return {
			type: 'ACTION_SET_DEPSTATION',
			payload: list,
		}
	},

	//设置到达站
	setArrstation(list) {
		return {
			type: 'ACTION_SET_ARRSTATION',
			payload: list,
		}
	},
}
export default actions
