import { Button } from "../../../common/common.css";
import { Container, InnerContainer, MarginP, RedSpan } from "./letsTalk.css";

const LetsTalk = () => {

    const handleClickMail = () =>{
        location.href="mailto: nofarbarazani.nb@gmail.com"
    }

    return(
        <Container>
            <InnerContainer>
                <h1>Let's Talk</h1>
                <MarginP>
                    I am looking for a team where I can <RedSpan>learn</RedSpan>, take <RedSpan>meaningful part</RedSpan>, 
                    <RedSpan> work hard</RedSpan>, <RedSpan>contribute</RedSpan> to the team and become a <RedSpan>better designer</RedSpan>.
                </MarginP>
                <Button onClick={handleClickMail}>nofarbarazani.nb@gmail.com</Button>
            </InnerContainer>
        </Container>
    )
}
export default LetsTalk;
