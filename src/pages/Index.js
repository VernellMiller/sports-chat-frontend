import { Link } from "react-router-dom";
import React from 'react'

const index = (props) => {

const loaded = () => {
    return props.players.map(player => (
        <div key={player._id} className="player">
            {/* <link to={`/players/${player._id}`}>
            </link> */}
            <img style={{height: 50, borderRadius: "50%"}} src={player.image} alt={player.name} />
                <h3>{player.firstName} {player.lastName}</h3>
            <p>{player.position}</p>
        </div>
    ));
};


const loading = () => <h3>Loading...</h3>

    return props.players ? loaded() : loading();
};

export default index
