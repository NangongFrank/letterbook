function date(type, timestamp) {
	let date = new Date(timestamp),
		dt = ''
	if(!type) {
		type = 'Ymd'
	}
	let year = date.getFullYear(),
		month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
		day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	switch(type) {
		case 'Ymd':
		return  year + '-' + month + '-' + day
		case 'YmdHis':
		let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
			minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
			second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
		return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
	}
}

export {
	date,
}