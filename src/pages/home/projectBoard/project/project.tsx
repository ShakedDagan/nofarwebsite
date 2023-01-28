import React, {FC} from "react";
import { Button } from "../../../../common/common.css";
import { ProjectDiv } from "./project.css";

interface ProjectProps {
    imgPath: string;
    projectName: string;
    secondaryHeader: string;
    tags: string[];
}

const Project : FC<ProjectProps> = (props) => {

    return(
        <ProjectDiv>
            <img src={props.imgPath}/>
            <div>
                <h2>{props.projectName}</h2>
                <h4>{props.secondaryHeader}</h4>
                <span>{props.tags.reduce((val1,val2)=>val1 + ' | ' + val2)}</span>
                <Button>VIEW CASE STUDY</Button>
            </div>
        </ProjectDiv>
    );
}

export default Project;
