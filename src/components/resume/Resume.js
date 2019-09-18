import React, { Component } from 'react';
import "./Resume.scss";

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            categoryPressed: "",
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        console.log(e.target.id);
        if (this.state.flag == false) {
            this.setState({
                categoryPressed: e.target.id,
                flag: true,
            });
        } else {
            this.setState({
                categoryPressed: "",
                flag: false,
            });
        }
    }
    
    render() {
        console.log(this.state);
        return (
            <div className="Resume-container">
                <div className="Resume-left">
                    <div className="Resume-button">
                        <a onClick={this.handleClick} id="personal-projects" className={(this.state.categoryPressed == "" || this.state.categoryPressed == "personal-projects") ? "Resume-category" : "hidden"}>Personal Projects</a>
                        <section className={(this.state.categoryPressed !== "personal-projects") ? "hidden" : "Resume-content"}>
                            <h3>Ordering System for Restaurants (04/2019 - Present)</h3>
                            <ul>
                                <li>Designed wireframes for the application using a collaborative interface design tool (Figma).</li>
                                <li>Translated wireframes into the responsive and interactive application by using reusable React Native components and CSS styles.</li>
                                <li>Managed data requests and handled responses from the RESTful API.</li>
                                <li>Hands-on experience in state management with Redux and Redux-thunk middleware.</li>
                                <li>Tested and veriﬁed the application's behaviour in real-time using Expo platform.</li>
                                <li>Used ES6 features such as classes, spread operators, arrow functions.</li>
                                <li>Experienced in using GitHub for source code management and version control.</li>
                                <li>Used Node Package Manager (NPM) to manage modules.</li>
                            </ul>
                        </section>
                    </div>
                    <div className="Resume-button">
                        <a onClick={this.handleClick} id="experience" className={(this.state.categoryPressed == "" || this.state.categoryPressed == "experience") ? "Resume-category" : "hidden"}>Experience</a>
                        <section className={(this.state.categoryPressed !== "experience") ? "hidden" : "Resume-content"}>
                            <h3>Buddy Trainer</h3>
                            <p>Nando's</p>
                            <span>09/2015 - 09/2019</span>
                            <span>Edinburgh, United Kingdom</span>
                            <span>Achievements/Tasks</span>
                            <ul>
                                <li>Supporting new staff members, checking on their development and organizing tasks during the shif</li>
                                <li>Completing administrative papers</li>
                                <li>Training safety and risk assessments, giving feedback with techniques learnt on the Buddy Trainer course</li>
                                <li>Ensuring customer satisfaction and handling complaint</li>
                                <li>Handling cash and card transactions</li>
                            </ul>
                            <p>Contact: <span>Nando's Chambers Street, EH1 1JB</span></p>
                        </section>
                    </div>
                    <div className="Resume-button">
                        <a onClick={this.handleClick} id="education" className={(this.state.categoryPressed == "" || this.state.categoryPressed == "education") ? "Resume-category" : "hidden"}>Education</a>
                        <section className={(this.state.categoryPressed !== "education") ? "hidden" : "Resume-content"}>
                            <h3>Computing and IT</h3>
                            <p>The Open University</p>
                            <span>09/2016 - 09/2019</span>
                            <span>United Kingdom</span>
                            <span>Courses</span>
                            <ul>
                                <li>Interaction Design and User Experience</li>
                                <li>Web and Cloud Technologies</li>
                                <li>Software Engineering</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="Resume-right">
                    <div className="Resume-button">
                        <a onClick={this.handleClick} id="skills" className={(this.state.categoryPressed == "" || this.state.categoryPressed == "skills") ? "Resume-category" : "hidden"}>Skills</a>
                         <section className={(this.state.categoryPressed !== "skills") ? "hidden" : "Resume-content"}>
                            <div className="skill-box"><span>JavaScript</span></div>
                            <div className="skill-box"><span>CSS</span></div>
                            <div className="skill-box"><span>HTML</span></div>
                            <div className="skill-box"><span>React.js</span></div>
                            <div className="skill-box"><span>React Native</span></div>
                            <div className="skill-box"><span>Redux</span></div>
                            <div className="skill-box"><span>Responsive Design</span></div>
                            <div className="skill-box"><span>Node.js</span></div>
                            <div className="skill-box"><span>Git</span></div>
                            <div className="skill-box"><span>User Interface</span></div>
                            <div className="skill-box"><span>Expo</span></div>
                            <div className="skill-box"><span>ES6</span></div>
                            <div className="skill-box"><span>SASS</span></div>
                        </section>
                    </div>
                    <div className="Resume-button">
                        <a onClick={this.handleClick} id="certificates" className={(this.state.categoryPressed == "" || this.state.categoryPressed == "certificates") ? "Resume-category" : "hidden"}>Certificates</a>
                        <section className={(this.state.categoryPressed !== "certificates") ? "hidden" : "Resume-content"}>
                            <h3>Udemy React JS Web Development - The Essentials Bootcamp (11/2018 – 01/2019)</h3>
                            <span>Learned core React.js concepts such as component lifecycles, props, states, JSX, and composition in the React apps.</span>
                            <h3>Treehouse Full Stack JavaScript Course (03/2017 – 05/2017)</h3>
                            <span>Learned JavaScript concepts including ES6 features, AJAX, Node.js (Express) and MongoDB basics, NPM, building REST API.</span>
                        </section>
                    </div>
                    <div className="Resume-button">
                        <a onClick={this.handleClick} id="languages" className={(this.state.categoryPressed == "" || this.state.categoryPressed == "languages") ? "Resume-category" : "hidden"}>Languages</a>
                        <section className={(this.state.categoryPressed !== "languages") ? "hidden" : "Resume-content"}>
                            <div className="language-box"><span>Polish - </span><span>Native</span></div>
                            <div className="language-box"><span>English - </span><span>Full Professional Proficiency</span></div>
                            <div className="language-box"><span>Spanish - </span><span>Elementary Proficiency</span></div>
                        </section>
                    </div>
                    <div className="Resume-button">
                        <a onClick={this.handleClick} id="interests" className={(this.state.categoryPressed == "" || this.state.categoryPressed == "interests") ? "Resume-category" : "hidden"}>Interests</a>
                        <section className={(this.state.categoryPressed !== "interests") ? "hidden" : "Resume-content"}>
                            <div className="interest-box"><span>Bodybuilding (creating workout and diet plans)</span></div>
                            <div className="interest-box"><span>Traveling (backpacking, immersing in new cultures)</span></div>
                            <div className="interest-box"><span>Languages (nailing Duolingo levels)</span></div>
                            <div className="interest-box"><span>Hiking</span></div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
    

export default Resume;