import React from 'react'

const apiConnection=(props) => {
    return(
        <div>
            <p>Fetching data from SWAPI</p>
            <h1>{props.apitext}</h1>
        </div>
    )
}

export default apiConnection;