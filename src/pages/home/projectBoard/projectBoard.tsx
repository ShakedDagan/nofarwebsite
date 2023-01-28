import Project from "./project/project";
import { ProjectBoardContainer } from "./projectBoard.css";

const ProjectBoard = () => {
    return(
        <ProjectBoardContainer>
            <h3>My Projects</h3>
            <Project imgPath="" projectName="Bloom" secondaryHeader="Period tracking app" tags={["UX/UI","Branding","Personal Project"]}/>
            <Project imgPath="" projectName="Tripo" secondaryHeader="Trip planning app" tags={["UX/UI","Branding","Personal Project"]}/>
            <Project imgPath="" projectName="Dogiz" secondaryHeader="Dog adoption website" tags={["UX/UI","Branding","Personal Project"]}/>
        </ProjectBoardContainer>
    );
}

export default ProjectBoard;
