import Linkedin from "../../assets/linkedin";
import Mail from "../../assets/mail";
import TopIcon from "../../assets/topIcon";
import { Container, InnerContainer, Frame, ImageIcon, InnerFrame, IconFrame, BackToTopSpan, UpCaret, StyledDiv, RightReservedSpan } from "./footer.css";

const Footer = () => {

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <Container>
            <InnerContainer>
                <Frame>
                    <InnerFrame>
                        <IconFrame>
                            <ImageIcon><Mail/></ImageIcon>
                            <ImageIcon><Linkedin/></ImageIcon>
                        </IconFrame>
                        <StyledDiv onClick={topFunction}><BackToTopSpan>BACK TO TOP <UpCaret><TopIcon/></UpCaret></BackToTopSpan></StyledDiv>
                    </InnerFrame>
                    <RightReservedSpan>© Nofar Barazani. All rights reserved.</RightReservedSpan>
                </Frame>
            </InnerContainer>
        </Container>
    );
}
export default Footer;
