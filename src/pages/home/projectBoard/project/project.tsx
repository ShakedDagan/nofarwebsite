import React, {FC} from "react";

interface ProjectProps {
    imgPath: string;
    projectName: string;
    secondaryHeader: string;
    tags: string[];
}

const Project : FC<ProjectProps> = (props) => {
    return(
        <div>
            <img src={props.imgPath}/>
            <div>
                <h2>{props.projectName}</h2>
                <h4>{props.secondaryHeader}</h4>
                <span>{props.tags.reduce((val1,val2)=>val1 + ' | ' + val2)}</span>
            </div>
        </div>
    );
}

export default Project;
