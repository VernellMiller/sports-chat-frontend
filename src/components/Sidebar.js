import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


const NavIcon = styled(Link)`
    margin-left:2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    border-style: solid black;
    /* background-color: black; */
    width: 250px;
    height: 100vh;
`;

const SidebarWrap = styled.div`
    width: 100%;

`;

const Sidebar = () => {

    const [ sidebar, setSidebar ] = useState(false)

    const ShowSidebar = () => setSidebar(!sidebar)

    return (
       <>
         <NavIcon to="#">
            <FaIcons.FaBars />
        </NavIcon>
        <SidebarNav>
            <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose />
                </NavIcon>
            </SidebarWrap>
            
        </SidebarNav>
        
       </>
    )
}

export default Sidebar;
