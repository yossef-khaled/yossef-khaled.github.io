//Import from material-ui
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100%",
        display: "table",
    },
    titleContainer: {
        float: "left",
        textAlign: "right",
        display: "table-cell",
        fontSize: "90%",
        [theme.breakpoints.up('md')]: {
            width: "25%",
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: "4.5rem",
            width: "45%",
            fontSize: "150%",
        },
        [theme.breakpoints.between(1000,2600)]: {
            marginLeft: "6.5rem"
        },
    },
    projectTitle: {
        fontSize: "105%",
        width: "45%",
    },
    roleContainer: {
        marginLeft: "5rem",
        textAlign: "right",
        float: "right",
        [theme.breakpoints.up('sm')]: {
            width: "150%"
        },
    },
    descriptionContainer: {
        float: "left",
        display: "inline-block",
        textAlign: "left",
        [theme.breakpoints.up('lg')]: {
            width: "90%",
            fontSize: "130%"
        },
    },
    description: {
        fontSize: "110%",
        marginTop: "0.5rem"
    },
    role: {
        fontSize: "85%",
    },
    stackPhrase: {
        fontSize: "90%"
    },
    stack: {
        marginTop: "1rem"
    },
    btnLink: {
        textDecoration: "none",
    },
    projectButton: {
        fontSize: "65%", 
        marginBottom: "1rem", 
        [theme.breakpoints.down('sm')]: {
            fontSize: "70%"
        },
    },
}));

function Project(props) {
    
    const classes = useStyles();
    
    //To use the media query for conditional rendering we can use 'isMeduim' (or whatever screen size) as :
    //const theme = useTheme();
    //const isMeduim = useMediaQuery(theme.breakpoints.up('md'));

    return (
         <div className={classes.mainContainer} style={{float: props.projectFloat}}>
            <Container className={classes.titleContainer} style={{width: props.titleWidth, textAlign: props.titlePosition}}>
                <Typography variant="overline" className={classes.projectTitle}>
                    ☰ {props.projectName}
                </Typography>
                <br/>
                <br/>
                <Container className={classes.roleContainer} style={{textAlign: props.rolePosition}}>
                    <Typography className={classes.role}>
                        {props.role}
                    </Typography>
                </Container>
            </Container>
            <Container maxWidth="sm" className={classes.descriptionContainer} style={{width: props.descriptionWidth}}>
                <Typography variant="h6" className={classes.description} style={{color: props.textColor}}>
                    {props.projectDescription}
                </Typography>
                <br/>
                <strong className={classes.stackPhrase} style={{color: props.textColor}}>
                    Stack used for the project : 
                </strong>
                <br/>
                <Typography className={classes.stack} style={{color: props.textColor}}>
                    {props.stack}
                </Typography>
                <br/>
                <a href={props.link} className={classes.btnLink}>
                    <Button variant="outlined" className={classes.projectButton} style={{borderColor: props.textColor, color: props.textColor}} disableElevation>
                        See on Github
                        <img src={props.githubLogo}/>
                    </Button>
                </a>
            </Container>
         </div>
    );
} 

export default Project;