import React from 'react'
import './Chats.css'
import Chat from './Chat'

const Chats = () => {
  return (
    <div className='chats'>
      <Chat 
        name='Alen'
        message='Hey, Whass up!'
        timestamp='40 seconds ago'
        profilePic= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PZe0BVHXbMeY8CmSVaCrLfrVh-P1bNHeUQ&usqp=CAU"
      />
      <Chat 
        name='Sarah'
        message='Hey Honey'
        timestamp='30 seconds ago'
        profilePic= "https://www.lovesove.com/wp-content/uploads/2021/06/Girls-Dp-Original-Lovesove.jpg"
      />
      <Chat 
        name='Tookta'
        message='Hey, Whass up!'
        timestamp='50 seconds ago'
        profilePic= "https://play-lh.googleusercontent.com/0YIkLnWINvhu-plXva3LiJ2CBuGZygVZqqqNc5-nnPC2WLhIDIwdvxBJHcHovZrnJQ=s200"
      />
      <Chat 
        name='Juicy'
        message='Hey, Whass up!'
        timestamp='40 seconds ago'
        profilePic= "https://i.pinimg.com/736x/8c/d4/78/8cd478fb516b90ff433312dfe78feb4e.jpg"
      />
    </div>
  )
}

export default Chats