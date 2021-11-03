import { Link } from "react-router-dom";
// import styled from "styled-components";
import { logOut } from "../services/firebase";
import { StyledHeader } from "../styles.js";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";


const Header = (props) => {
    return (
        <StyledHeader>
            <h1>TEAM BUILDER</h1>
            <div className="search"><AiIcons.AiOutlineFileSearch/>Search</div>
            <div className="headercons">
            <AiIcons.AiFillBell style={{color: "#2262C6"}}/>
            <HiIcons.HiDotsHorizontal style={{color: "#2262C6"}}/>
            </div>
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