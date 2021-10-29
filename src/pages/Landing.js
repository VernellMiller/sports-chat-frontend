import { StyledMain } from "../styles";
import { signIn } from "../services/firebase";

const Landing = (props) => {
    return (
        <StyledMain>
            <h1>Landing</h1>
            <button onClick={signIn}>Sign in with Google</button>
        </StyledMain>
    );
}

export default Landing;