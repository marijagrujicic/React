import React from 'react'
import './Dark.css'

function AboutText() {
    return (
        <div className="background">
        <div className="about_text">
            <h1 className="about_caption">About Dark</h1>
            <br></br>
            <p><b>A family saga with a supernatural twist, set in 
                a German town, where the disappearance of two young 
                children exposes the relationships among four families. 
                The first German production from the world's leading Internet 
                TV Network is set in a German town in present day where the 
                disappearance of two young children exposes the double lives 
                and fractured relationships among four families. In ten 
                hour-long episodes, the story takes on a surprising twist that
                 ties back to the same town in 1986.—Wiedemann & Berg Television </b></p>
                 <br></br>
            <div className="producers">
                {/* eslint-disable-next-line */}
                <a href="https://www.imdb.com/name/nm2171633/?ref_=tt_ov_wr" target="_blank"><img src="https://m.media-amazon.com/images/M/MV5BMzRlYTMzM2UtZjUxMy00NjY0LWJmNWEtZDU2N2NlOTQyODVkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY317_CR22,0,214,317_AL_.jpg" alt='baran' /></a>
                {/* eslint-disable-next-line */}
                <a href="https://www.imdb.com/name/nm1296729/?ref_=tt_ov_wr" target="_blank"><img src="https://www2.pictures.zimbio.com/gi/Deutscher+Fernsehpreis+2021+M6JQkIhCX4Yx.jpg" alt='jantje'/></a>
            </div>
            <div className="producers_names">
                <h2 className="producers_michael">Baran bo Odar</h2>
                <h2 className="producers_sheila">Jantje Friese</h2>
            </div>
            
        </div>
        </div>
    )
}

export default AboutText