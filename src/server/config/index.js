module.exports = {
	port: 27017,
	url: 'mongodb://localhost:27017/bossyuan',
	session: {
		name: '',
		secret: '',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}