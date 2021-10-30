import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


const NavIcon = styled(Link)`
    margin-left:2rem;
`;

const Sidebar = () => {
    return (
       <>
       
            <NavIcon to="#">
                <FaIcons.FaBars />

            </NavIcon>
        
       </>
    )
}

export default Sidebar;
