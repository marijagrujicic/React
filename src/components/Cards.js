import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Main actors</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="actors/Jonas.jpg"
                            text="Louis Hofmann - All the light we cannot see, Life after life, The forger, Masters of the air..."
                            label="Jonas"
                            path='/services'
                        />
                        <CardItem
                            src="actors/Martha.jpg"
                            text="Lisa Vicari - Django, Hannes, Am ende der Worte, Das Haus, Luna..."
                            label="Martha"
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="actors/Charlotte.jpg"
                            text="Karoline Eichhorn - Tatort, Sarah Kohr, Trafikant, Nona, Und der Zukunft zugewandt..."
                            label="Charlotte"
                            path='/services'
                        />
                        <CardItem
                            src="actors/Ulrich.jpg"
                            text="Oliver Masucci - Day shift, Schachnovelle, The Girlfriend Experience..."
                            label="Ulrich"
                            path='/services'
                        />
                        <CardItem
                            src="actors/Hannah.jpg"
                            text="Maja Schöne - Der Mann der die Welt aß, Tatort, Bella Block..."
                            label="Hannah"
                            path='/services'
                        />


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
