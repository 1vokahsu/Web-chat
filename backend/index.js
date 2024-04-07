const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post('/authenticate', async (req, res) => {
	const { username } = req.body

	try {
		const req = await axios.put(
			'https://api.chatengine.io/users/',
			{ username: username, secret: username, first_name: username },
			{ headers: { 'private-key': 'a295b722-2265-47a1-88a6-ae6513026fcd' } }
		)
		return res.status(req.status).json(req.data)
	} catch (e) {
		return res.status(e.response.status).json(e.response.data)
	}
	// return res.json({ username: username, secret: 'sha256...' })
})

app.listen(3001)
