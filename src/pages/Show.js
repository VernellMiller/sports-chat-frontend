import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react';
import { StyledSection } from "../styles";


const Show = (props) => {

let {teamid} = useParams();
// console.log(teamid);

const [newForm, setNewForm ] = useState(getNewState());

const loaded = () => {
    const teamArray = props.players.filter(player => {
        return player.team === teamid
    });
    
    return teamArray.map(player => (
        <table>
            <tbody>
                <tr key={player._id} className="player">
                    {/* <link to={`/players/${player._id}`}>
                    </link> */}
                    <td>
                        <img style={{height: 50, borderRadius: "50%"}} src={player.image} alt={player.name} />
                    </td>
                    <td>
                         <h3>{player.firstName} {player.lastName}</h3>
                    </td>
                    <td>
                        <p>{player.position}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    ));
};

const loading = () => <h3>Loading...</h3>
// form helper functions
const handleChange = (event) => {
    setNewForm(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value

        }
    ))
};

const handleSubmit = (event) => {
    event.preventDefault();
    const teamForm = {
        ...newForm, team:teamid
    }
    props.createPlayers(teamForm);
    setNewForm(getNewState());
};

function getNewState() {
    return {
        image: "",
        firstName: "",
        lastName: "",
        position: "",
    }
};

    return (
        <StyledSection>
            <form className="Form" onSubmit={handleSubmit}>
                <input 
                value={newForm.image} 
                onChange={handleChange}
                type="text"
                placeholder="Image"
                name="image" 
                />
                <input
                 value={newForm.firstName} 
                 onChange={handleChange}
                 type="text"
                 placeholder="First Name"
                 name="firstName" 
                 />
                <input
                 value={newForm.lastName} 
                 onChange={handleChange}
                 type="text"
                 placeholder="Last Name"
                 name="lastName" 
                 />
                <input 
                value={newForm.position} 
                onChange={handleChange}
                placeholder="Position"
                name="position"
                />
                <input type="submit" value="Create Player" />
            </form>
            { props.players ? loaded() : loading() }
        </StyledSection>
    );
};

export default Show
