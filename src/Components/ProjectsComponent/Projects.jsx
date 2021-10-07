//Import from react
import React from 'react';

//Improt from material-ui
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//Import from other components
import Project from '../ProjectComponent/Project';
import Header from '../HeaderComponent/Header';

//Import data
import bWVertically from '../../Shared/images/black-white-vertically.jpg'; 
import PROJECTS_DATA from '../../Shared/Data/Projects';

//Others
import { PropTypes } from 'prop-types';

const styles = {
    horizontalLine: {
        width: "100%",
    }
    //TODO :
    // 1- Make the background image width responsive.
    // 2- Add "Bookstore project" into the projects.js file.

}

function Projects(props) {
    
    const { classes } = props;
    console.log(`${JSON.stringify(props)} at Projects`);    
    props.onProjectsRender(bWVertically);
    console.log(bWVertically);

    const projects = PROJECTS_DATA.map((project) => {
        return(
            <>
                <Project projectName={project.name}
                         projectDescription={project.description}
                         stack={project.stack}
                         role={project.myRole}
                         link={project.link}
                         textColor='#000000'
                         fontSize='150%'
                />
                {project.id != PROJECTS_DATA.length && <hr className={classes.horizontalLine}/>}
            </>
        )
    });
    
    return(
        
        <div>
            <Header btnColor="#000000" borderColor="#000000" backgroundColor="#ffffff"/>
            <Container style={{marginLeft: "11%"}}>
                {projects}
            </Container>
            <br/>
        </div>
    );

} 


Projects.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Projects);