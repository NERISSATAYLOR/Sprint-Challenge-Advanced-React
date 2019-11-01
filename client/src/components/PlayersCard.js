import React from 'react';

const PlayersCard = props => {

    return (
        <div className="players">
            {props.players && props.players.map(player =>
                <div key={player.id}>
                    <h1>Name: {player.name}</h1>
                    <p>Country:  {player.country}</p>
                    <p>Searches: {player.searches}</p>
                </div>)}
        </div>

    )

}
export default PlayersCard;