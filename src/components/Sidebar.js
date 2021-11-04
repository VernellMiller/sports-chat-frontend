import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
// import { SidebarData } from "./SidebarData";


const NavIcon = styled(Link)`
    color: #2262C6;
    border-color: 1px solid #2262C6;
    margin-left:2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    /* border-right: 1px solid black; */
    background-color: #2262C6;
    width: 300px;
    height: 1172px;
    margin-top: 100px;
    border-radius: 0 20px 20px 0;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    /* z-index: 10; */
    overflow: auto;
`;

const SidebarWrap = styled.div`
    width: 100%;

`;

const Sidebar = () => {
    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
         <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {SidebarData.map((item, index) => {
                    return <SubMenu item={item} key={index} /> 
                })};
            </SidebarWrap>
            
        </SidebarNav>
        
       </>
    )
}

export default Sidebar;
