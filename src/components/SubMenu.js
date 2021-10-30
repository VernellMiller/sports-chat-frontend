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
      background: #252832;
      border-left: 4px solid #632ce4;
      cursor: pointer;
  }

`;

const SidebarLabel = styled.span`
  margin-left: 16px;
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
      </>
    );
  };
  
  export default SubMenu;