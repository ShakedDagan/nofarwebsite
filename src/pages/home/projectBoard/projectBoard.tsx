import Project from "./project/project";

const ProjectBoard = () => {
    return(
        <div>
            <h3>My Projects</h3>
            <Project imgPath="" projectName="Bloom" secondaryHeader="Period tracking app" tags={["UX/UI","Branding","Personal Project"]}/>
        </div>
    );
}

export default ProjectBoard;
