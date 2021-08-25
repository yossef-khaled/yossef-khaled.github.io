import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../HeaderComponent/Header';
import PROJECTS_DATA from '../../Shared/Data/Projects';
import Project from '../ProjectComponent/Project';
import Container from '@material-ui/core/Container';

const styles = {
    horizontalLine: {
        width: "100%",
    }
}

function Projects(props) {
    
    const { classes } = props;
    console.log(`${JSON.stringify(props)} at Projects`);    
    //props.onProjectsRender('black-white-vertically.jpg');

    const projects = PROJECTS_DATA.map((project) => {
        return(
            <>
                <Project projectName={project.name}
                         projectDescription={project.description}
                         stack={project.stack}
                         role={project.myRole}
                         link={project.link}
    
                />
                {project.id != PROJECTS_DATA.length && <hr className={classes.horizontalLine}/>}
            </>
        )
    });
    
    return(
        
        <div>
            <Header color="#000000" borderColor="#000000" backgroundColor="#ffffff"/>
            <Container>
                {projects}
            </Container>
        </div>
    );

} 


Projects.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Projects);