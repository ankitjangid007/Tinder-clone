import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import database from '../firebase'
import './TinderCards.css'

const TinderCards = () => {
    
    const[people, setPeople] = useState([
        {
            name: 'Sunny Leone',
            url: 'https://static.toiimg.com/photo/54376365.cms'
        },
        {
            name: 'Jennifer Winget',
            url: 'https://www.tellychakkar.com/sites/www.tellychakkar.com/files/images/story/2015/05/30/jennifer.jpg'
        },
        {
            name: "Ileana d'cruz",
            url: 'https://www.pinkvilla.com/files/styles/gallery-section/public/Ileana%20D%27Cruz%20Hot%20and%20Sexy%20Pics%204.jpg?itok=qzLcFonP'
        },

    ]);

    useEffect(()=>{
        const unsubscribe = 
        database.collection('people').onSnapshot(snapshot=> (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        return () => {
            unsubscribe();
        }
    },[people])
    
    return (
        <div className='tinderCard'>
            <div className="tinderCard__cardContainer">
                {people.map((people, i) => (
                    <TinderCard 
                        className='swipe' 
                        key={i}
                        preventSwipe= {['up', 'down']}
                    >
                        <div 
                            className="card"
                            style={{ backgroundImage: `url(${people.url})` }}
                        >
                            <h3>{people.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards