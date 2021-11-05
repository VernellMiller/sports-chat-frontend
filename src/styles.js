import { RiBodyScanFill } from "react-icons/ri";
import styled from "styled-components";



export const StyledLanding = styled.main`

`;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: fixed; */
    padding-left: 1rem;
    height: 5rem;
    background-color: rgba(0,0,0,0);
    margin-right: 60px;
    
    .head {
        text-decoration: none;
    }

    .search {
        border: 1px solid #E2E2DE;
        color: #AFAFAB;
        padding: 10px 100px;
        border-radius: 50px;
        margin-left: -205px;
    }

    .headercons {
        margin-right: -500px;
        color: #F55F47;
    }

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
                    border-radius: 50%;
                    margin-top: -19px;
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


`;

export const StyledBanner = styled.main`
    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
    border-radius: 20px;
    width: 1400px;
    height: 400px;
    box-shadow: 1px 1px 5px 3px #E2E2DE;
    /* width: 1600px; */
    /* position: fixed; */
    /* display: block; */
    margin: -58px 0 0 350px;
    /* margin-left: 250px; */
    .team {
        display: flex;
        justify-content: center;
        align-items: center;
        /* align-content: center; */
        font-size: 100px;
        color: #F55F47;
        
    }
    
`;

export const StyledTitle = styled.div`
    color: #2262C6;
    margin: 0 0 0 353px;
`;

export const StyledContent = styled.div`
    /* border: 1px solid black; */
    border-radius: 20px;
    box-shadow: 1px 1px 5px 3px #E2E2DE;
    color: #2262C6;
    width: 1400px;
    height: 688px;
    margin: 15px 0 0 353px;
    overflow: auto;

    .Form {
        margin-top: 20px;
    }

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

export const StyledSection = styled.section`
    width: 1300px;
    margin-left: 30px;

    table, td {
        /* border: 1px solid black; */
        width: 100%;
        /* display: flex; */
    }

    .player {
        border-bottom: 1px solid #E2E2DE;
        display: flex;
        /* justify-content: space-around; */
        /* align-items: center; */
        /* margin-bottom: -20px; */
        /* padding: 10px 50px 0px 20px; */
        /* color: black; */
        h3 {
            color: #F55F47;
        }
        p {
            color: #A3A3A0;
        }
        img {
            padding-top: 15px;
        }
        &:hover {
        /* background: #2262C6; */
        cursor: pointer;
      }
    }
`;

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    height: 5rem;
    justify-content: center;
`;