let msg = {
    payload: {
        DeliveryArrivalDate: "2020-12-04T07:30:51"
    }
}


let date = new Date(msg.payload.DeliveryArrivalDate) //.setHours(0,0,0,0)
let currentDate = new Date() //.setHours(0,0,0,0)

let deliveryDate = sliceDate(date)
let curDate = sliceDate(currentDate)

msg.payload.filter = {}
msg.payload.filter.deliveryDate = deliveryDate
msg.payload.filter.currentDate = curDate

function sliceDate(date2) {
    console.log(date2)
    //  return date
    console.log(date2.getDay(),)
    return {
        day: date2.getDate(),
        month: date2.getMonth(),
        year: date2.getFullYear()
    }
}


console.log(msg.payload.filter)

if (date !== currentDate) {

    // msg.payload.filter = false
    return msg
} else return msg