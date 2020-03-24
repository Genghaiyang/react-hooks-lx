const initStore = {
	from: '北京',
	to: '上海',
	isCitySelectorVisible: false,
	currentSelectingLeftCity: false,
	cityData: null,
	isLoadingCityData: false,
	isDateSelectorVisible: false,
	departDate: Date.now(),
	highSpeed: false
}
const index = (state = initStore, action) => {
	/* from(state,action){},
    to(){},
    isCitySelectorVisible(){}, */
	switch (action.type) {
		case 'ACTION_SET_FROM':
			return {
				...state,
				from: action.payload
			}

		case 'ACTION_SET_TO':
			return {
				...state,
				to: action.payload
			}

		case 'ACTION_SET_CITYSELECTORVISIBLE':
			return {
				...state,
				isCitySelectorVisible: action.payload
			}

		case 'ACTION_SET_CITYFROMLEFT':
			return {
				...state,
				currentSelectingLeftCity: action.payload
			}

		case 'ACTION_SET_CITYDATA':
			return {
				...state,
				cityData: action.payload
			}

		case 'ACTION_SET_ISLOADINGCITYDATA':
			return {
				...state,
				isLoadingCityData: action.payload
			}

		default:
			return state
	}
}
export default index
