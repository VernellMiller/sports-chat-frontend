import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 20px;

  &:hover {
      /* background: #252832; */
      border-bottom: 4px solid #632ce4;
      border-radius: 5%;
      cursor: pointer;
  }

`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
      background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({item}) => {
    const [ subnav, setSubnav ] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
      <>
        <SidebarLink to={item.path} onClick={item.subnav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
            {item.SubNav && subnav ? item.iconOpened : item.SubNav ? item.iconClosed : null}
        </div>
        </SidebarLink>
        {subnav && item.subnav.map((item, index) => {
            return (
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
      </>
    );
  };
  
  export default SubMenu;