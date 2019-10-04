import React from 'react';
import Players from './PlayersTest';
const PlayersList = (props) => {
    console.log(props)
    const mates = props.mates;
    const listMates = mates && mates.map(mate => {
        return <div className="list-players" key="mate.id">
            <h2>{mate.name}</h2>
            <h2>{mate.country}</h2>
            <h2>{mate.searches}</h2>
            <h2>{mates.id}</h2>
        </div>
    })
    return (
        <div>
            {listMates}
        </div>
    )
}
export default PlayersList;