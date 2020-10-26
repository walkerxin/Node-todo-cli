const program = require('commander')
const api = require('./index.js')

program
	.command('add <taskName...>')
	.description('add a task')
	.action((source, destination) => {
		const taskName = source.join(' ')
		api.add(taskName)
	})

program.command('clear')
	.description('clear all tasks')
	.action(() => {
		api.clear()
	})

program.parse(process.argv)