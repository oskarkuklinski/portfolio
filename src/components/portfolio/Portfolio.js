import React from 'react';
import "./Portfolio.scss";
import Project from "../project/Project";

import portfolioData from '../../data/portfolioData';

const Portfolio = () => {
    return (
        <div className="Portfolio-container">
            <div className="Portfolio-showcase">
                {portfolioData.map((data, key) => <Project data={data} key={key} /> )}
            </div>
        </div>
    );
}

export default Portfolio;