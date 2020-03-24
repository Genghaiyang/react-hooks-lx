const actions = {
    //设置出发城市
    setFrom(from) {
        return {
            type: 'ACTION_SET_FROM',
            payload: from,
        }
    },
    //设置到达城市
    setTo(to) {
        return {
            type: 'ACTION_SET_TO',
            payload: to,
        }
    },
    //设置城市选择页面显示或者隐藏
    setCitySelectorVisible(bool){
        return {
            type: 'ACTION_SET_CITYSELECTORVISIBLE',
            payload: bool,
        }
    },
    //设置出发城市或者到达城市
    setCityFromLeft(bool){
        return {
            type: 'ACTION_SET_CITYFROMLEFT',
            payload: bool,
        }
    },
    //是否正在加载城市数据中
    setIsLoadingCityData(bool){
        return {
            type: 'ACTION_SET_ISLOADINGCITYDATA',
            payload: bool,
        }
    },
    //设置城市数据
    setCityData(data){
        return {
            type: 'ACTION_SET_CITYDATA',
            payload: data,
        }
    },
}
export default actions