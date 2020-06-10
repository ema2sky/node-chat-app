var moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('LT'))

console.log(date.format('h:mm a'))
var someTime = moment.valueOf()

var date = moment(createdAt)
console.log(date)
console.log(moment().valueOf())