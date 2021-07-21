import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../HeaderComponent/Header';

const styles = {

}

function Projects(props) {
    
    const { classes } = props;
    console.log(`${JSON.stringify(props)} at Projects`);
    props.onProjectsRender('black-white-vertically.jpg');
     
    return(
        
        <div>
            <Header color="#000000" borderColor="#000000"/>
            <h1>Projects Component</h1>
        </div>
    );

} 


Projects.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Projects);