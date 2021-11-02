import { Link } from "react-router-dom";
import React from 'react'

const index = (props) => {

const loaded = () => {
    return props.players.map(player => (
        <div key={player._id} className="player">
            {/* <link to={`/players/${player._id}`}>
            </link> */}
                <h1>{player.firstName}</h1>
            <img style={{height: 70}} src={player.image} alt={player.name} />
            <h3>{player.position}</h3>
        </div>
    ));
};


const loading = () => <h3>Loading...</h3>

    return props.players ? loaded() : loading();
};

export default index
