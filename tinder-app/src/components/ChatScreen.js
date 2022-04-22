import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './ChatScreen.css'

const ChatScreen = () => {

    const[input, setInput] = useState('')
    const[message, setMessage] = useState([
        {
            name: "Elena",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PZe0BVHXbMeY8CmSVaCrLfrVh-P1bNHeUQ&usqp=CAU',
            message: 'hey, wass up dude'
        },
        {
            name: "Elena",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PZe0BVHXbMeY8CmSVaCrLfrVh-P1bNHeUQ&usqp=CAU',
            message: 'How it going'
        },
        {
            message: 'All Good'
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessage([...message, {message: input}])
        setInput("")
    }

    return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>YOU MATCHED WITH ALLEN ON 15/04/22</p>
        {message.map(message => (
            <div key={message.name}>
                {message.name ? (
                    <div className='chatSceen__message'>
                        <Avatar 
                            className= 'chatScreen__image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                    ) : (
                        <div className='chatSceen__message'>
                            <p className='chatScreen__textUser'>{message.message}</p>
                        </div>
                    )
                }
            </div>
        ))}

        <form className='chatScreen__input'>
            <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                className='chatScreen__inputField' 
                type="text" 
                placeholder='Type a message...'
            />
            <button onClick={handleSend} className='chatScreen__inputButton'>Send</button>
        </form>


    </div>
  )
}

export default ChatScreen