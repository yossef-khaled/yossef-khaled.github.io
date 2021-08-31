import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../HomeCopmonent/Home';
import Header from '../HeaderComponent/Header';
import Projects from '../ProjectsComponent/Projects';


function Main(props) { 


    console.log(`${JSON.stringify(props.onComponentRender())} at Main`);
    

    return (
        <>
            <Switch>
                <Route path="/home" component={() => <Home onHomeRender={(imageName) => props.onComponentRender(imageName)}/>}/>
                <Route path="/projects" component={() => <Projects onProjectsRender={(imageName) => props.onComponentRender(imageName)}/>}/>
                <Redirect to="/home"/>
            </Switch>
        </>
    );
}


export default Main;