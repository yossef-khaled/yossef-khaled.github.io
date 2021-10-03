import Container from '@material-ui/core/Container';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    mainContainer: {
        color: "#000000",
        textAlign: "right",
        marginLeft: "5%",
        backgroundWidth: "50%"
    },
    courseTitle: {
        fontSize: '120%'
    },
};

function Course(props) {
  
    const { classes } = props;


    console.log(props.organization);
    return(
        <>
            <Container className={classes.mainContainer}>
                <Typography variant="overline" className={classes.courseTitle}>
                    -{props.courseName}
                </Typography>
                <Typography varient="overline">
                    Organization {" "}
                    <a href={props.organization == 'ITI' ? 'https://www.iti.gov.eg' : `https://www.${props.organization}.com`}>
                        <img src={`${props.organization}`}/>
                    </a>
                </Typography>
                <br/>
                <Typography varient="overline">
                    STARTED ON
                </Typography>
                <Typography varient="overline">
                    {props.courseDate}
                </Typography>
                <br/>
                <Typography varient="overline">
                    Took me
                </Typography>
                <Typography varient="overline">
                    {props.courseDuration}
                </Typography>
                <br/>
                <Typography variant="overline">
                    The course is all about 
                </Typography>
                {Array.isArray(props.courseDetails) ? props.courseDetails.map((detail) => <Typography> - {detail}</Typography>) : <Typography>{props.courseDetails}</Typography>}
                <br/>
                {props.courses ? props.courses.map((course) => 
                    <Typography>
                        - {course.name}
                    </Typography>)
                    : <></>}
            </Container>
        </>
    );
}


Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Course);