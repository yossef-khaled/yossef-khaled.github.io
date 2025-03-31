//Improt from react
import React from 'react';

//Import from react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';

//Import from other components
import Home from '../HomeCopmonent/Home';
import Projects from '../ProjectsComponent/Projects';
import Education from '../EducationComponent/Education';
import Contact from '../ContactComponent/Contact';

function Main(props) {

    return (
        <>
            <Switch>
                <Route path="/home" component={() => <Home onHomeRender={(imageName) => props.onComponentRender(imageName)}/>}/>
                <Route path="/projects" component={() => <Projects onProjectsRender={(imageName) => props.onComponentRender(imageName)}/>}/>
                <Route path="/education" component={() => <Education onEducationRender={(imageName) => props.onComponentRender(imageName)}/>}/>
                <Route path="/contact" component={() => <Contact onContactRender={(imageName) => props.onComponentRender(imageName)}/>}/>
                <Redirect to="/home"/>
            </Switch>
        </>
    );
}


export default Main;