import { FC } from "react";
import { HomeDiv } from "./home.css";
import LetsTalk from "./letsTalk/letsTalk";
import Opening from "./opening/opening";
import ProjectBoard from "./projectBoard/projectBoard";

const Home : FC = () => {
    return(
        <HomeDiv>
            <Opening/>
            <ProjectBoard/>
            <LetsTalk/>
        </HomeDiv>
    )
}

export default Home;
