const req = require('request')
const ping = require('ping')
const pu77y = (url, qty, ms) => {
    let err = ok = 0
	let rek = 0
    setInterval(_ => {
	rek++
        for (let i = qty; i--;)
            req(url, error => !error ? ok++ : err++)
		console.log(`\x1b[36m[PU77Y\x1b[37m]\x1b[32m ====> ${url} - ${rek}\x1b[37m`);
        err = ok = 0

    }, ms)
}

module.exports = pu77y