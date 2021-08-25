import Container from '@material-ui/core/Container'; 
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    mainContainer: {
        width: "100%",
    },
    projectTitle: {
        fontSize: "150%",
    },
    titleContainer: {
        textAlign: "right",
        marginRight: "50%",
        display: "table-cell",
        width: "40%",
    },
    descriptionContainer: {
        color: "#000000",
        marginLeft: "50%",
        textAlign: "left",
        display: "table-cell",
        width: "40%",
    },
}

function Project(props) {

    const {classes} = props;

    return (
         <Container className={classes.mainContainer}>
            <Container maxWidth="sm" className={classes.titleContainer}>
                <Typography variant="overline" className={classes.projectTitle}>
                    {props.projectName}
                </Typography>
                <Typography>
                    {props.role}
                </Typography>
            </Container>
            <Container maxWidth="sm" className={classes.descriptionContainer}>
                <Typography variant="h6">
                    {props.projectDescription}
                </Typography>
                <br/>
                <Typography>
                    <strong>
                    Stack used for the project : 
                    </strong>
                    <br/>
                    {props.stack}
                </Typography>
            </Container>
         </Container>
    );
} 


Project.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);