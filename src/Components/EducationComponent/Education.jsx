//Import from React
import React from 'react';

//Import from Material-ui
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography';
import { useMediaQuery, makeStyles, useTheme } from '@material-ui/core';

//Import images
import bWVertically from '../../Shared/images/black-white-vertically.jpg';
import bWHorizontally from '../../Shared/images/black-white-horizontally.jpg';
import whiteGithubLogo from '../../Shared/images/white-github-logo.png';

//Import from other components
import Header from '../HeaderComponent/Header';
import Course from '../CourseComponent/Course';
import Project from '../ProjectComponent/Project';

//Import data 
import COURSES_DATA from '../../Shared/Data/Courses';
import PROJECTS_DATA from '../../Shared/Data/Projects';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "table",
    },
    collegeSec: {
        display: "table-cell",
        width: "50%", 
        float: "left",
        textAlign: "right",
        backgroundColor: "#000000",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            textAlign: "center",
        }
    },
    collegeTitle: {
        fontSize: "100%",
        fontSize: "140%",
        float: "left",
        marginRight: "25rem",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            textAlign: "center",
        }
    },
    year: {
        color: "#ffffff",
        fontSize: "100%",
        float: "left",
        marginRight: "20rem",
        fontSize: "110%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            textAlign: "center",
        }
        
    },
    yearDetails: {
        display: "block",
        float: "left",
        fontSize: "85%",    
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            textAlign: "center",
        }
    },
    coursesSec: {
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            float: "center"
        },
        [theme.breakpoints.up('sm')]: {
            color: "#000000",
            display: "table-cell",  
        },
    },
    coursesTitle: {
        color: "#000000",
        fontSize: "140%",
        float: "right",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            float: "center",
            fontSize: "120%"
        }
    },
    horizontalLine: {
        width: "100%",
        float: "right",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            float: "center"
        }
    },
    projectContainer: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "90%",
            width: "100%",
            textAlign: "center",
            float: "center"
        }
    },
    projectsDonePhrase: {
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: "110%",
        }
    },
    reserveSpace: {
        color: "#000000",
        marginTop: "478rem",
        fontSize: "0.5%",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    }
}));

/*const styles = {
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
        marginRight: "60%"
    },
    year: {
        color: "#ffffff",
        fontSize: "150%",
        marginRight: "70%",
        float: "left",
        
    },
    yearDetails: {
        float: "left",
        fontSize: "90%"
    },
    coursesSec: {
        color: "#000000",
        marginLeft: "50%",
        width: "40%",
        display: "table-cell",
    },
    horizontalLine: {
        width: "85%",
        float: "right",
    }
};*/

function Education(props) {

    props.onEducationRender();

    const classes = useStyles();
    
    //To use the media query for conditional rendering we can use 'isSmall' (or whatever screen size) as :
    //const theme = useTheme();
    //const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    

    const courses = COURSES_DATA.map((course) => {

        return(
            <>
                <Course key={course.id}
                        courseName={course.name}
                        organization={course.organization}
                        organizationImg={course.organizationImg}
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
                        <hr className={classes.horizontalLine}/>
                        <Typography variant="overline" className={classes.year}>
                            2016 - 2018
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.yearDetails}>
                            Specialize in electrical engineering.
                        </Typography>
                        <br/>
                        <hr className={classes.horizontalLine}/>
                        <Typography variant="overline" className={classes.year}>
                            2018 - 2019 
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.yearDetails}>
                            Specialize in CSE inside electrical engineering.
                            <br/>
                            <br/>
                            <Typography className={classes.projectsDonePhrase}>
                                Projects I done back that year 
                            </Typography>
                            <br/>
                        </Typography>
                        <br/>
                        {PROJECTS_DATA.filter((project) => project.type.includes('2018-2019')).map((project) => {
                            return (
                                <Container className={classes.projectContainer}>
                                    {project.id !== 8 && <hr className={classes.horizontalLine}/>}
                                    <br/>
                                    <br/>
                                    <Project projectName={project.name}
                                             projectDescription={project.description}
                                             stack={project.stack}
                                             role={project.myRole}
                                             link={project.link}
                                             githubLogo={whiteGithubLogo}
                                             textColor= "#ffffff"
                                             descriptionWidth="100%"
                                             titleWidth="110%"
                                             titlePosition="left"
                                             rolePosition="center"
                                             projectFloat="right"
                                    />
                                </Container>
                            )
                        })}
                        <br/>
                        <hr className={classes.horizontalLine}/>
                        <Typography variant="overline" className={classes.year}>
                            2019 - 2020 
                        </Typography>
                        <br/>
                        <Typography variant="overline" className={classes.yearDetails}>
                            Bachelore's Year, and the year I learned the most about our track.
                            <br/>
                            <br/>
                            <Typography className={classes.projectsDonePhrase}>
                                Projects I done back that year 
                            </Typography>
                            <br/>
                        </Typography>
                        <br/>
                            {PROJECTS_DATA.filter((project) => project.type.includes('2019-2020')).map((project) => {
                                return (
                                    <Container className={classes.projectContainer}>
                                        {project.id !== 1 && <hr className={classes.horizontalLine}/>}
                                        <br/>
                                        <br/>
                                        <Project projectName={project.name}
                                                 projectDescription={project.description}
                                                 stack={project.stack}
                                                 role={project.myRole}
                                                 link={project.link}
                                                 githubLogo={whiteGithubLogo}
                                                 textColor= "#ffffff"
                                                 descriptionWidth="100%"
                                                 titleWidth="90%"
                                                 titlePosition="left"
                                                 rolePosition="center"
                                                 projectFloat="right"
                                        />
                                        <br/>
                                    </Container>
                                )
                            })}
                </Container>
                <h1 className={classes.reserveSpace}>
                    hi
                </h1>
                <br/>
            </Container>
            <Container className={classes.coursesSec}>
                <Typography variant="overline" className={classes.coursesTitle}>
                        Courses  
                </Typography>
                <Container>
                    {courses}
                </Container>
            </Container>
            
        </React.Fragment>
    );
}

export default Education;