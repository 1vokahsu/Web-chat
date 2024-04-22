import React from 'react'
import {useNavigate} from "react-router-dom"

const ChatBody = ({messages, typingStatus, lastMessageRef}) => { 
  const navigate = useNavigate()
  
  console.log(messages)
  const handleLeaveChat = () => {
    localStorage.removeItem("userName")
    navigate("/")
    window.location.reload()
  }
  
  return (
		<>
			<header className='chat__mainHeader'>
				<p></p>
				<button className='leaveChat__btn' onClick={handleLeaveChat}>
					Покинуть чат
				</button>
			</header>

			<div className='message__container'>
				{messages.map(message =>
					message.user_name === localStorage.getItem('userName') ? (
						<div className='message__chats'>
							<p className='sender__name'>Вы</p>
							<div className='message__sender'>
								<p>{message.message}</p>
							</div>
						</div>
					) : (
						<div className='message__chats'>
							<p>{message.user_name}</p>
							<div className='message__recipient'>
								<p>{message.message}</p>
							</div>
						</div>
					)
				)}

				<div className='message__status'>
					<p>{typingStatus}</p>
				</div>
				<div ref={lastMessageRef} />
			</div>
		</>
	)
}

export default ChatBody