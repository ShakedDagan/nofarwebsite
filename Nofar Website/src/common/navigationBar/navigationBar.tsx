import NbSvg from "../../assets/nbSvg";
import { Button } from "../common.css";
import { Navigation, Nav, Frame, MyProjectsSpan, AboutSpan } from "./navigationBar.css";


const NavigationBar = () => {
    return(
        <Navigation>
            <Nav>
            <NbSvg/>
            <Frame>
                <MyProjectsSpan>My Projects</MyProjectsSpan>
                <AboutSpan>About</AboutSpan>
            </Frame>
            <Button>VIEW MY RESUME</Button>
            </Nav>
        </Navigation>
    );
}

export default NavigationBar;
