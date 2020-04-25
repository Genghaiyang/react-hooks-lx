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

	//设置综合筛选显示与隐藏
	setFiltersVisible(bool) {
		return {
			type: 'ACTION_SET_FILTERSVISIBLE',
			payload: bool,
		}
	},

	//设置选中的坐席类型
	setCheckedTicketTypes(list) {
		return {
			type: 'ACTION_SET_CHECKEDTICKETTYPES',
			payload: list,
		}
	},
	//设置选中的车次类型
	setCheckedTrainTypes(list) {
		return {
			type: 'ACTION_SET_CHECKEDTRAINTYPES',
			payload: list,
		}
	},
	//设置选中的出发车站
	setCheckedDepartStations(list) {
		return {
			type: 'ACTION_SET_CHECKEDDEPSTATIONS',
			payload: list,
		}
	},
	//设置选中的到达车站
	setCheckedArriveStations(list) {
		return {
			type: 'ACTION_SET_CHECKEDARRSTATIONS',
			payload: list,
		}
	},
	//设置选中的出发开始时间
	setDepartTimeStart(num) {
		return {
			type: 'ACTION_SET_DEPTIMESTART',
			payload: num,
		}
	},
	//设置选中的出发结束时间
	setDepartTimeEnd(num) {
		return {
			type: 'ACTION_SET_DEPTIMEEND',
			payload: num,
		}
	},
	//设置选中的到达开始时间
	setArriveTimeStart(num) {
		return {
			type: 'ACTION_SET_ARRTIMESTART',
			payload: num,
		}
	},
	//设置选中的到达结束时间
	setArriveTimeEnd(num) {
		return {
			type: 'ACTION_SET_ARRTIMEEND',
			payload: num,
		}
	},
	//设置耗时排序或者出发早晚排序
	setOrderType(num) {
		return {
			type: 'ACTION_SET_ORDERTYPE',
			payload: num,
		}
	},
	//设置只看有票
	setOnlyTickets(num) {
		return {
			type: 'ACTION_SET_ONLYTICKETS',
			payload: num,
		}
	},
}
export default actions
