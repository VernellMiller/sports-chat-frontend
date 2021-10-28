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
                    <li>
                        <Link>Login</Link>
                    </li>
                    <li onClick={ logOut }>Logout</li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;