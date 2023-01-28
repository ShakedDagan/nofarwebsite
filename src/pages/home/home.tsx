import { FC } from "react";
import { HomeDiv } from "./home.css";
import ProjectBoard from "./projectBoard/projectBoard";

const Home : FC = () => {
    return(
        <HomeDiv>
            <ProjectBoard/>
        </HomeDiv>
    )
}

export default Home;
