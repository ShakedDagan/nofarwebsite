import styled from "styled-components";

export const Navigation = styled.div`
    width: 100%;
    height: 155px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 0 0 150px;
    padding: 49px 102px;
    background-color: var(--bk-pink);
`

export const Nav = styled.nav`
    width: 100%;
    height: 57px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`

export const Frame = styled.div`
    width: 237px;
    height: 27px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 35px;
    padding: 0;
`

export const MyProjectsSpan = styled.span`
    width: 132px;
    height: 27px;
    flex-grow: 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: var(--pink-01);
`

export const AboutSpan = styled.span`
    width: 70px;
    height: 27px;
    flex-grow: 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: var(--dark-blue);
`
