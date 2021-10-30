import styled from "styled-components";


export const StyledLanding = styled.main`

`;

// export const StyledBody = styled.body`
//     background-color: blue;
// `;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: fixed; */
    padding-left: 1rem;
    height: 5rem;
    background-color: rgba(0,0,0,0);
    margin-left: 250px;

    nav {
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            li {
                margin-right: 1.5rem;
                font-size: 0.7rem;
                font-weight: 700;
                img {
                    height: 50px;
                    border-radius: 50%
                }
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
    img {
        height: 600px;
        
    }
`;

export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: ${props => props.chase ? `url(${props.chase})` : 'none'};
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px dotted red;
    height: 400px;
    h1 {
        color: white;
    }
}
`;

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    height: 5rem;
    justify-content: center;
`;


export const StyledBanner = styled.main`
    border: 1px solid black;
    height: 400px;
    /* width: 1600px; */
    /* position: fixed; */
    /* display: block; */
    margin: -50px 0 0 250px;
    /* margin-left: 250px; */
`;

export const StyledChat = styled.div`
    border: 1px solid black;
    color: white;
    
`;
