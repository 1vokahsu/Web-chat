const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').Server(app);
const PORT = 4000
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});
const { Pool } = require('pg')
app.use(cors())
let users = []
const pool = new Pool({
	user: 'postgres',
	password: 'postgres',
	host: 'localhost',
	port: 5433, // порт по умолчанию для PostgreSQL
	database: 'webchat',
})

app.get('/api/messages', async (req, res) => {
	try {
		const result = await pool.query(
			'SELECT messages.message, users.user_name FROM messages INNER JOIN users ON messages.user_id = users.id ORDER BY messages.created_at ASC'
		)
		res.json(result.rows)
	} catch (error) {
		console.error('Error fetching messages from database:', error)
		res.status(500).json({ error: 'An error occurred while fetching messages' })
	}
})

app.get('/api/users', async (req, res) => {
	try {
		const result = await pool.query(
			'SELECT id, user_name FROM users ORDER BY created_at ASC'
		)
		res.json(result.rows)
	} catch (error) {
		console.error('Error fetching users from database:', error)
		res.status(500).json({ error: 'An error occurred while fetching users' })
	}
})



socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)

    socket.on("typing", data => (
      socket.broadcast.emit("typingResponse", data)
    ))

    socket.on('message', async data => {
			console.log('! : adding message', data.user_name, data.message)
			try {
				await pool.query(
					'INSERT INTO messages (user_id, message) VALUES ((SELECT id FROM users WHERE user_name = $1), $2)',
					[data.user_name, data.message]
				)
				console.log(data.user_name)
				console.log('! : message added')
				socketIO.emit('messageResponse', data)
			} catch (error) {
				console.error('Error saving message to database:', error)
			}
		})

    socket.on('newUser', async data => {
			users.push(data)
			socketIO.emit('newUserResponse', users)
			console.log('! : newUserResponse', data.user_name)
			try {
        var check = await pool.query('SELECT user_name FROM users');
        check = check.rows.map(user => user.user_name)
        console.log(check)
        var flag = true;
        for (var i = 0; i < check.length; i++) {
          if (check[i] == data.user_name) {
            flag = false;
            console.log('! : User exist')
          }
        }
        if (flag) {
          await pool.query('INSERT INTO users (user_name) VALUES ($1)', [
          	data.user_name,
          ])
          console.log('! : users added')
        }
			} catch (error) {
				console.error('Error saving message to database:', error)
			}
		})
 
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter(user => user.socketID !== socket.id)
      socketIO.emit("newUserResponse", users)
      socket.disconnect()
    });
});

http.listen(PORT, () => {
    console.log(`! : Server listening on ${PORT}`)
});