import Container from '@material-ui/core/Container';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    mainContainer: {
        color: "#000000",
        textAlign: "right",
        marginLeft: "10%",
    }
};

function Course(props) {
  
    const { classes } = props;
  
    return(
        <Container className={classes.mainContainer}>
            <Typography variant="overline">
                {props.courseName}
            </Typography>
        </Container>
    );
}


Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Course);