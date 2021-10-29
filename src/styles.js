import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    height: 5rem;
    background-color: black, 0.5;

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