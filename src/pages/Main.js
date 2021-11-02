import { Route, Switch } from "react-router";
import { StyledContent } from "../styles";
import Chat from "../components/Chat";
import Cards from "../components/Cards";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Content = (props) => {
    return (
        <StyledContent>
            <>
                <h1>Players</h1>
                <Switch>
                    <Route exact path="/">
                        <Index /> 
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