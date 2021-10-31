import { StyledChat } from "../styles";

const Chat = (props) => {
    return (
        <StyledChat>
            <>
                <h1>Chat</h1>
                <article></article>
                <input placeholder="Message..."></input>
                <button>SEND</button>
            
            </>
        </StyledChat>
    );
};

export default Chat;