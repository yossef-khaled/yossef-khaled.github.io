import React from 'react';
import Container from '@material-ui/core/Container'; 
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import bWDiagonally from '../../Shared/images/black-white-diagonally.jpg'; 
import Header from '../HeaderComponent/Header';
import Course from '../CourseComponent/Course';
import COURSES_DATA from '../../Shared/Data/Courses';

const styles = {
    mainContainer: {
        display: "table"
    },
    collegeSec: {
        width: "40%",
        marginRight: "50%",
        display: "table-cell",
    },
    collegeTitle: {
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
    courseTitle: {
        fontSize: "150%",
        marginLeft: "83%",
        
    },
    coursesSec: {
        color: "#000000",
        marginLeft: "50%",
        width: "40%",
        display: "table-cell",
    },
    courses: {
    },
    horizontalLine: {
        width: "85%",
        float: "right",

    }
};

function Education(props) {

    const {classes} = props;

    props.onEducationRender(bWDiagonally);

    const courses = COURSES_DATA.map((course) => {

        return(
            <>
                <Course courseName={course.name}
                        organization={course.organization}
                        courseDate={course.date}
                        courseDuration={course.duration}
                        courseType={course.type}
                        courseDetails={course.details}
                        courses={course.courses}
                        credentialId={course.credentialId}
                        certificate={course.certificate}
                />

                {/*+4 is because of the specialization courses are not considered of the main array*/}
                {course.id != COURSES_DATA.length + 4 && <hr className={classes.horizontalLine}/>}
            </>
        );
    });

    return(
        <React.Fragment className={classes.mainContainer}>
            <Header btnColor="#000000" borderColor="#000000" backgroundColor="#ffffff"/>
            <Container className={classes.collegeSec}>
                <Typography variant="overline" className={classes.collegeTitle}>
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
                <Typography variant="overline" className={classes.courseTitle}>
                        Courses  
                </Typography>
                <Container className={classes.courses}>
                    {courses}
                </Container>
            </Container>
        </React.Fragment>
    );
}

Education.propTypes = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(Education);