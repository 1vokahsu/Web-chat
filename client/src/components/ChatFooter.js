import React, {useState} from 'react'

const ChatFooter = ({socket}) => {
    const [message, setMessage] = useState("")
    const handleTyping = () => socket.emit("typing",`${localStorage.getItem("userName")} печатает`)

    const handleSendMessage = (e) => {
        e.preventDefault()
        if(message.trim() && localStorage.getItem("userName")) {
        socket.emit("message", 
            {
            message: message, 
            user_name: localStorage.getItem("userName"), 
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id
            }
        )
        }
        setMessage("")
    }
  return (
    <div className='chat__footer'>
        <form className='form' onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder='Ваш текст' 
            className='message' 
            value={message} 
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleTyping}
            />
            <button className="sendBtn">Отправить</button>
        </form>
     </div>
  )
}

export default ChatFooter