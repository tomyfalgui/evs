import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import { remote } from 'electron'

const dbPath =
	process.env.NODE_ENV === 'development'
		? path.join(remote.app.getPath('desktop'), 'db.json')
		: path.join(remote.app.getPath('userData'), 'db.json')

const adapter = new FileSync(dbPath)
const db = low(adapter)
db
	.defaults({
		settings: {
			admin: {
				username: 'admin',
				password: 'admin'
			}
		},
		party_groups: []
	})
	.write()

// for party_groups
// party_groups: [
//	{id: 1, username: random, password:random, parties: [
//		{pname: 'pname', president: {
//					name: 'lalaland',
// 					points: 0
//				}}
//  ]}
// ]

// in the future add a interface changer
export default db
