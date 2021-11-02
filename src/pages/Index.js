import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Index = (props) => {

const [newFrom, setNewForm ] = useState({
    image: "",
    firstName: "",
    lastName: "",
    position: "",
});

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

// form helper functions

const handleChange = () => {

};

const handleSubmit = () => {

};

    return (
        <section>
            <form>
                <input 
                value={newFrom.image} 
                onChange={handleChange}
                type="text"
                placeholder="Image"
                name="image" 
                />
                <input
                 value={newFrom.firstName} 
                 onChange={handleChange}
                 type="text"
                 placeholder="First Name"
                 name="firstName" 
                 />
                <input
                 value={newFrom.lastName} 
                 onChange={handleChange}
                 type="text"
                 placeholder="Last Name"
                 name="lastName" 
                 />
                <input 
                value={newFrom.position} 
                onChange={handleChange}
                placeholder="Position"
                name="position"
                />
                <input type="submit" value="Create Player" />
            </form>
            { props.players ? loaded() : loading() }
        </section>
    );
};

export default Index
