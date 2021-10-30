import React, { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/Io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const SubMenu = ( ) => {
    return (
      <>
        <SidebarLink to={item.path}></SidebarLink>
      </>
    );
  };
  
  export default SubMenu;