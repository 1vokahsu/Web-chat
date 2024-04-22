import React, { useState, useEffect } from 'react'


const ChatBar = ({socket}) => {
	const [users, setUsers] = useState([])

    // useEffect(()=> {
    //     socket.on("newUserResponse", data => setUsers(data))
    // }, [socket, users])


		// useEffect(() => {
		// 	socket.on('messageResponse', data => setMessages([...messages, data]))
		// }, [socket, messages])

	useEffect(() => {
		fetch('http://localhost:4000/api/users')
			.then(response => response.json())
			.then(data => {
				setUsers(data)
			})
			.catch(error => console.error('Error fetching messages:', error))
	}, [])

  return (
		<div className='chat__sidebar'>
			<h2>Пользователи</h2>
			<div>
				<br/>
				<div className='chat__users'>
					{users.map(user => (
						<p>{user.user_name}</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default ChatBar