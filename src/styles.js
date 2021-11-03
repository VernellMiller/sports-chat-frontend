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
    margin-left: 335px;

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
    h1 {
        color: #2262C6;
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
    box-shadow: 1px 1px 5px 3px #808080;
    /* width: 1600px; */
    /* position: fixed; */
    /* display: block; */
    margin: -50px 0 0 350px;
    /* margin-left: 250px; */
`;

export const StyledContent = styled.div`
    /* border: 1px solid black; */
    color: #2262C6;
    height: 688px;
    margin: 0px 0 0 350px;
    overflow: auto;
    
    .cards {
        width: 50px;
        height: 50px;
    }
`;

export const StyledChat = styled.div`
    border: 1px solid black;
    margin: 0px 50px 0 1300px;
    height: 572px;

    article {
        border: 1px solid black;
        height: 434px;
    }

    input {
        background: none;
        border: none;
        background-color: #DCDCDC;
        
        width: 400px;
        height: 50px;
        padding: 0;
      
    }
    
    button {
        margin-right: -100px;
        height: 50px;
        border: none;
        background: none;
        background-color: #DCDCDC;
    }
    
`;

export const StyledCards = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    article {
        border: 4px dotted black;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin: 1rem;
        width: 18.75rem;
        height: 15.375rem;
        border-radius: 7px;

    }
`;