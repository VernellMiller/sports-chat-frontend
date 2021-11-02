import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { StyledContent } from "../styles";
import Chat from "../components/Chat";
import Cards from "../components/Cards";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Content = (props) => {

    const [ players, setPlayers ] = useState(null);

    const BASE_URL = "http://localhost:3001/players/";

    // helper functions
    const getPlayers = async () => {
        // const data = await fetch(BASE_URL).then(Response => Response.json());
        const Response = await fetch(BASE_URL);
        const data = await Response.json();
        setPlayers(data);
    };

    const createPlayers = async (player) => {
        await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(player)
        });
    };

    useEffect(() => getPlayers(), []);

    return (
        <StyledContent>
            <>
                <h1>Created Players</h1>
                <Switch>
                    <Route exact path="/">
                        <Index players={players} createPlayers={createPlayers}/> 
                    </Route>
                    <Route path="/players/:id" render={(props) => (
                        <Show {...props} /> 
                    )} >
                    </Route>
                </Switch>
            </>
        </StyledContent>
    );
};

export default Content;