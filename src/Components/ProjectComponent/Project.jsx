//Import from material-ui
import Container from '@material-ui/core/Container'; 
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//Import data
import githubLogo from "../../Shared/images/github-logo.png";

//Others
import { PropTypes } from 'prop-types';

const styles = {
    mainContainer: {
        width: "100%",
    },
    projectTitle: {
        fontSize: "150%",
    },
    titleContainer: {
        textAlign: "right", 
        display: "table-cell",
        width: "35%",
    },
    descriptionContainer: {
        marginLeft: "50%",
        textAlign: "left",
        display: "table-cell",
        width: "40%",
    },
    projectButton: {
        textDecoration: "none"
    }
}

function Project(props) {

    const {classes} = props;

    return (
         <Container className={classes.mainContainer}>
            <Container maxWidth="sm" className={classes.titleContainer}>
                <Typography variant="overline" className={classes.projectTitle} style={{fontSize: props.fontSize}}>
                    {props.projectName}
                </Typography>
                <Typography>
                    {props.role}
                </Typography>
            </Container>
            <Container maxWidth="sm" className={classes.descriptionContainer}>
                <Typography variant="h6" style={{color: props.textColor, fontSize: props.fontSize}}>
                    {props.projectDescription}
                </Typography>
                <br/>
                <Typography style={{color: props.textColor}}>
                    <strong>
                    Stack used for the project : 
                    </strong>
                    <br/>
                    {props.stack}
                </Typography>
                <br/>
                <a href={props.link} className={classes.projectButton}>
                    <Button variant="outlined" style={{backgroundColor: "white"}} disableElevation>
                        See on Github
                        <img src={githubLogo}/>
                    </Button>
                </a>
            </Container>
         </Container>
    );
} 


Project.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);