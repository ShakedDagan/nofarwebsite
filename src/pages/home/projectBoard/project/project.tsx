import React, {FC} from "react";
import { Button } from "../../../../common/common.css";
import { ButtonDiv, ProjectDiv, ProjectImg, Tags } from "./project.css";

interface ProjectProps {
    imgPath: string;
    projectName: string;
    secondaryHeader: string;
    tags: string[];
}

const Project : FC<ProjectProps> = (props) => {

    return(
        <ProjectDiv>
            <ProjectImg src={props.imgPath}/>
            <div>
                <h3>{props.projectName}</h3>
                <h5>{props.secondaryHeader}</h5>
                <Tags>{props.tags.reduce((val1,val2)=>val1 + ' | ' + val2)}</Tags>
                <ButtonDiv><Button>VIEW CASE STUDY</Button></ButtonDiv>
            </div>
        </ProjectDiv>
    );
}

export default Project;
