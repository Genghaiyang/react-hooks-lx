export default function useDateFormat (date){
    const weekArray = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    let time =
        new Date(date).getFullYear().toString() +
        '-' +
        (new Date(date).getMonth() + 1).toString() +
        '-' +
        new Date(date).getDate().toString()
        let week = weekArray[new Date(date).getDay()]
        return [time,week]
}
