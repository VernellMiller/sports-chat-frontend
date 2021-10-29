import { Link } from "react-router-dom";
// import styled from "styled-components";
import { logOut } from "../services/firebase";
import { StyledHeader } from "../styles.js";


const Header = (props) => {
    return (
        <StyledHeader>
            <h1>Header</h1>
            <nav>
                <ul>
                    {
                        props.user ? 
                        <>
                            <li>Nice to see you, {props.user.displayName}</li>
                            <li>
                                <img 
                                    src={props.user.photoURL}
                                    alt={props.user.displayName}
                                />
                            </li>
                            <li onClick={ logOut }>Logout</li>
                        </>
                        :
                        <>
                        <li>Hello Stranger.</li>
                        <li><Link to="/landing">Login</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;