import Project from "./project/project";
import { ProjectBoardContainer, ProjectContainer } from "./projectBoard.css";
import bloomImg from "../../../assets/project_1.png";
import tripoImg from "../../../assets/project_2.png";
import dogizImg from "../../../assets/project_3.png";

const ProjectBoard = () => {
    return(
        <ProjectBoardContainer>
            <h2>My Projects</h2>
            <ProjectContainer>
                <Project imgPath={bloomImg} projectName="Bloom" secondaryHeader="Period tracking app" tags={["UX/UI","Branding","Personal Project"]}/>
                <Project imgPath={tripoImg} projectName="Tripo" secondaryHeader="Trip planning app" tags={["UX/UI","Branding","Personal Project"]}/>
                <Project imgPath={dogizImg} projectName="Dogiz" secondaryHeader="Dog adoption website" tags={["UX/UI","Branding","Personal Project"]}/>
            </ProjectContainer>
        </ProjectBoardContainer>
    );
}

export default ProjectBoard;
