const program = require('commander')
const api = require('./index.js')

program
	.command('add <taskName...>')
	.description('add a task')
	.action((source, destination) => {
		const taskName = source.join(' ')
		api.add(taskName).then(() => console.log('添加成功'), () => console.log('添加失败'))
	})

program.command('clear')
	.description('clear all tasks')
	.action(() => {
		api.clear().then(() => '已清空所有任务')
	})

if (process.argv.length === 2) {
	void api.showAll()
	return
}
program.parse(process.argv)