import React from 'react';
import Container from '@material-ui/core/Container'; 
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import bwDiagonally from '../../Shared/images/black-white-diagonally.jpg'
import Header from '../HeaderComponent/Header'


const styles = {
    collegeSec: {
        display: "table-cell",
        
    },
    title: {
        fontSize: "150%",
        marginRight: "80%"
    },
    year: {
        color: "#ffffff",
        fontSize: "150%",
        marginRight: "70%",
        float: "left",
        
    },
    yearDetails: {
        float: "left"
    },
    coursesSec: {
        color: "#000000",
        display: "table-cell"
    }
};

function Education(props) {

    const {classes} = props;

    props.onEducationRender(bwDiagonally);

    return(
        <>
            <Header btnColor="#000000" borderColor="#000000" backgroundColor="#ffffff"/>
            <Container className={classes.collegeSec}>
                <Typography variant="overline" className={classes.title}>
                    College Career  
                </Typography>
                <Container>
                        <Typography variant="overline" className={classes.year}>
                            2015 - 2016 
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.yearDetails}>
                            Joined faculty of engineering, zagazig university. 
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.year}>
                            2016 - 2018
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.yearDetails}>
                            Specialize in electrical engineering.
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.year}>
                            2018 - 2019 
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.yearDetails}>
                            Specialize in CSE inside electrical engineering.
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.year}>
                            2019 - 2020 
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.yearDetails}>
                            Bachelore's Year, and the year I learned the most about our track.
                        </Typography>
                </Container>
            </Container>
            <Container className={classes.coursesSec}>
                <Typography variant="overline" className={classes.title}>
                        Courses  
                </Typography>
            </Container>
            <Container>
                
            </Container>
        </>
    );
}

Education.propTypes = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(Education);