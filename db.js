const fs = require('fs')
const p = require('path')
const homedir = require('os').homedir()
const homePath = process.env.HOME || homedir
const dbPath = p.resolve(homePath, '.todo2')

const db = {
	read(path = dbPath) {
		return new Promise((resolve, reject) => {
			fs.readFile(path, {flag: 'a+'}, (err, data) => {
				if (err) return reject(err)
				let taskList;
				try { taskList = JSON.parse(data.toString()) } catch (e) { taskList = [] }
				resolve(taskList)
			})
		})
	},
	write(list, path = dbPath) {
		return new Promise((resolve, reject) => {
			fs.writeFile(path, JSON.stringify(list) + '\n', err => {
				if (err) return reject(err)
				resolve()
			})
		})
	}
}
module.exports = db