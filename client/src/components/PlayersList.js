import React from 'react';

const PlayersList = (props) => {
    console.log(props)

    return (
        <div className="players">
            {props.mates && props.mates.map(mate =>
                <p>name:{mate.name} country:{mate.country} searches : {mate.searches} id : {mate.id} </p>


                //     {/* <h2>country: {mate.country}</h2>
                //     <h2>searches : {props.searches} </h2>
                //     <h2>id : {props.id}</h2>
                // </> */}
            )}
        </div>



    )

}









export default PlayersList;