import styled from "styled-components"

export const Button = styled.button`
    all: unset;
    flex-grow: 0;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: normal;
    text-align: center;
    color: var(--dark-blue);
    width: 203px;
    height: 57px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 17px;
    border: solid 2px var(--dark-blue);
    :hover {
        border: solid 2px var(--white);
        background-color: var(--pink-01);
        color: var(--white);
    }
`

export const Arvo = styled.span`
    font-family: 'Arvo', serif;
`