import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {

    const StyledHeader = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 1rem;
        height: 5rem;
        background-color: black, 0.5;
        
        nav {
            display: flex;
            align-items: center;
            ul {
                display: flex;
                list-style: none;
                li {
                    margin-right: 1.5rem;
                    a {
                        text-decoration: none;
                        color: inherit;
                    }
                    &:last-child:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    `;

    return (
        <StyledHeader>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li>
                        <Link>Login</Link>
                    </li>
                    <li>Logout</li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;