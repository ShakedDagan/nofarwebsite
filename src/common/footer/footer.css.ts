import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 14.5vh;
    background-color: var(--bk-pink);
`

export const InnerContainer = styled.div`
    width: 95%;
    height: 100%;
    border-top: 2px solid var(--dark-blue);
    margin: 0 auto;
    display: flex;
    align-items: center;
`

export const Frame = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const InnerFrame = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const IconFrame = styled.div`
    width: 4.7%;
    display: flex;
    justify-content: space-between;
`

export const ImageIcon = styled.div`
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: end;
`
export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BackToTopSpan = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: var(--dark-blue);
`

export const UpCaret = styled.span`
    font-size: 15px;
    align-self: flex-start;
`

export const RightReservedSpan = styled.span`
    font-size: 18px;
    color: var(--dark-blue);
`