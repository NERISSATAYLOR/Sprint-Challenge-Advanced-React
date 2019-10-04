import React from 'react';

const PlayersList = (props) => {
    console.log(props)
    return (
        < div >
            <h2>{props.name}</h2>
            <h2>{props.country}</h2>
            <h2>{props.searches}</h2>
            <h2>{props.id}</h2>
        </div >




    )
}
export default PlayersList;