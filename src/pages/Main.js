import { StyledContent } from "../styles";
import Chat from "../components/Chat";
import Cards from "../components/Cards";

const Content = (props) => {
    return (
        <StyledContent>
            <>
            <h1>Content</h1>
            <Cards />
            <Chat />
            </>
        </StyledContent>
    );
};

export default Content;