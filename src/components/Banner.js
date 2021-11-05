import { Link } from "react-router-dom";
// import styled from "styled-components";
import { logOut } from "../services/firebase";
import { StyledBanner } from "../styles.js";
import { SidebarData } from "./SidebarData";


const Banner = (props) => {
    return (
        <StyledBanner>
            <h1 className="team">{SidebarData[0].title}</h1>
            <div>
            {/* <img src="https://th.bing.com/th/id/R.0e552a9c288bf08db96f90bf58ea94c8?rik=na7str7Z2qpoPQ&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2f7%2f3%2fe%2f364865.jpg&ehk=lkqIdS8fnDtmNCWql2z0%2fVWOCsotkwbHS61C2R9n62A%3d&risl=&pid=ImgRaw&r=0" alt=""></img> */}
            </div>
        </StyledBanner>
    );
};

export default Banner;