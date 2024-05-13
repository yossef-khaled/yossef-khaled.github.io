//Import from react
import { useState } from 'react'; 

//Import from material-ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

//Others
import { Lightbox} from 'react-modal-image';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        color: "#000000",
        textAlign: "right",
        marginLeft: "6%",
        width: "100%",
        float: "right",
        backgroundSize: "100px 100px", /* or contain depending on what you want */
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "block",
        marginBottom: "2rem",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        }
    },
    courseName: {
        fontSize: "140%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "110%"
        }
    },
    organizationContainer: {
        fontSize: "120%",
        [theme.breakpoints.down('sm')]: {
            
        }
    },
    courseOrganization: {
        fontSize: "100%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "80%"
        }
    },
    start:{
        fontSize: "100%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "100%"
        }
    },
    date: {
        fontSize: "100%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "100%"
        }
    },
    duration: {
        fontSize: "100%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "100%"
        }
    },
    details: {
        fontSize: "100%",
        [theme.breakpoints.down('sm')]: {
            fontSize: "100%"
        }
    },
    horizontalLine: {
        display: "inline-block",
        width: "100%",
    }
}));

function Course(props) {

    const [isOpen, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const classes = useStyles();
    
    //To use the media query for conditional rendering we can use 'isMeduim' (or whatever screen size) as :
    //const theme = useTheme();
    //const isMeduim = useMediaQuery(theme.breakpoints.up('md'));
    
    return(
        <>
            <Container className={classes.mainContainer}>
                <br/>
                <Typography variant="overline" className={classes.courseName}>
                    {props.courseName}
                </Typography>
                <Container className={classes.organizationContainer}>
                    <Typography variant="overline" className={classes.courseOrganization}>
                        Organization {" "}
                    </Typography>
                    <br/>
                    <a href={props.organization === 'ITI' ? 'https://www.iti.gov.eg' : `https://www.${props.organization}.com`}>
                        <img src={`${props.organizationImg}`} alt={`${props.organization} logo`}/>
                    </a>
                </Container>
                <br/>
                <br/>
                <Typography variant="overline" className={classes.start}>
                    STARTED ON
                </Typography>
                <br/>
                <Typography variant="overline" className={classes.date}>
                    {props.courseDate}
                </Typography>
                <br/>
                <br/>
                <Typography variant="overline" className={classes.duration}>
                    TOOK ME
                </Typography>
                <br/>
                <Typography variant="overline">
                    {props.courseDuration}
                </Typography>
                <br/>
                <br/>
                <Typography variant="overline" className={classes.details}>
                    The course is all about 
                </Typography>
                <br/>
                {Array.isArray(props.courseDetails) ? props.courseDetails.map((detail) => {
                    return(
                        <>
                            <Typography variant="overline"> • {detail}</Typography>
                            <br/>
                        </>
                    )
                }) 
                : <Typography variant="overline">{props.courseDetails}</Typography>
                }
                <br/>
                <br/>
                {props.certificate ? 
                <Card>
                    <CardMedia
                           component="img"
                           height="150"
                           image={props.certificate}
                           alt={`${props.courseName} Certificate`}
                    />
                    <CardActions>
                        <Button onClick={handleOpen}>SHOW CERTIFICATE</Button>
                        {props.credentialId ? 
                        <Typography variant='overline'>
                            Credential ID {props.credentialId}
                        </Typography> 
                        :
                        <></>
                        }
                        {isOpen && 
                        <Lightbox
                            medium={props.certificate}
                            large={props.certificate}
                            alt={`${props.courseName} Certificate`}
                            onClose={handleClose}
                        />}
                    </CardActions>
                </Card> 
                : 
                <Typography variant='overline' style={{color: "red"}}>
                    Couldn't get the certificate as the projects deadlines were overdue due to military service
                </Typography>
                }
                <br/>
                {props.courses ? props.courses.map((course) => 
                {
                    return(
                        <>
                            {course.id !== 0 && <hr className={classes.horizontalLine}/>}
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

                        </>
                    )
                }
                )
                    : <></>}
            </Container>
        </>
    );
}


export default Course;