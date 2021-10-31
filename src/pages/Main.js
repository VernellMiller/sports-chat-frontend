import { StyledContent } from "../styles";
import Chat from "../components/Chat";

const Content = (props) => {
    return (
        <StyledContent>
            <>
            <h1>Content</h1>
            <Chat />
            </>
        </StyledContent>
    );
};

export default Content;