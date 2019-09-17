import React from 'react';
import "./ProjectPage.scss";

const ProjectPage = (props) => {
    return (
        <div className="ProjectPage-container">
            <div className="ProjectPage-holder">
                <h2>{props.data.title}</h2>
                <h3>Tools:</h3>
                <div className="ProjectPage-toolholder">
                    {props.data.tools.map((tool, key) => { return <div key={key} className="ProjectPage-tool"><span>{tool}</span></div> })}
                </div>
            </div>
            <p>{props.data.desc}</p>
            <div className="ProjectPage-embed" dangerouslySetInnerHTML={{__html: props.data.embed}}></div>
            { (props.data.embed != undefined) ? <div className="ProjectPage-embed" dangerouslySetInnerHTML={{__html: props.data.embed}}></div> : <a href={props.data.link} target="_blank">link</a> }
        </div>
    );
}

export default ProjectPage;