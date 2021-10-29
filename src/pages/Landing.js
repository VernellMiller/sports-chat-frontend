import { StyledMain } from "../styles.js";
import { signIn } from "../services/firebase";
import chase from "../static/chase.png"

const Landing = (props) => {
    return (
        <StyledMain chase={chase}>
            <h1>Sports Chat</h1>
            <button onClick={signIn}>Sign in with Google</button>
        </StyledMain>
    );
}

export default Landing;