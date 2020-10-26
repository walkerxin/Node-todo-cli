const db = require('./db.js')

module.exports.add = async (taskName) => {
	// 1. 读取文件数据
	const list = await db.read()
	// 2. 添加任务
	list.push({title: taskName, done: false})
	// 3. 保存数据到DB
	await db.write(list)
}

module.exports.clear = async () => {
	await db.write([])
}

module.exports.showAll = async () => {
	const list = await db.read()
	list.forEach((task, index) => console.log(`${task.done ? '[x]' : '[_]'} ${index + 1} - ${task.title}`))
}