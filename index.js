const fs = require('fs')
const p = require('path')
const homedir = require('os').homedir()
const homePath = process.env.HOME || homedir
const path = p.resolve(homePath, '.todo2')

module.exports.add = (taskName) => {
	fs.readFile(path, {flag: 'a+'}, (err, data) => {
		let list;
		try {
			list = JSON.parse(data.toString())
		} catch (e) {
			list = []
		}

		list.push({title: taskName, done: false})
		fs.writeFile(path, JSON.stringify(list) + '\n', err => {
			if (err) {
				console.log('write err:')
				console.log(err)
			}
		})
	})
}

module.exports.clear = () => {
	fs.writeFile(path, JSON.stringify([]), err => {})
}