import { FC } from "react";
import { HomeDiv } from "./home.css";
import LetsTalk from "./letsTalk/letsTalk";
import ProjectBoard from "./projectBoard/projectBoard";

const Home : FC = () => {
    return(
        <HomeDiv>
            <ProjectBoard/>
            <LetsTalk/>
        </HomeDiv>
    )
}

export default Home;
