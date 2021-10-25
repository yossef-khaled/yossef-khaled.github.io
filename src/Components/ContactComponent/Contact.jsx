//Import from material-ui
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';
import { useMediaQuery, makeStyles, useTheme } from '@material-ui/core';

//Import data
import bwDiagonally from '../../Shared/images/black-white-diagonally.png';

//Import from other components
import Header from '../HeaderComponent/Header';

const useStyles = makeStyles(theme => ({
    reachMeontainer: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: "5rem",
            marginTop: "30%",
            width: "80%",
            fontSize: "90%"
        },
        [theme.breakpoints.between(800,1000)]: {
            marginLeft: "9rem",
            marginTop: "17%",
            width: "80%",
            fontSize: "90%",
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: "10.5rem",
            marginTop: "10%",
            width: "80%",
            fontSize: "90%"
        },
    },
    reachMeVia: {
        fontSize: "200%"
    },
    linkedInLogo:{
        color: "#ffffff",
        fontSize: "400%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "5.5rem",
        },
        [theme.breakpoints.between(800,1000)]: {
            marginLeft: "8rem"
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: "2.5rem",
        },
    },
    linkedInText: {
        color: "#000000",
        fontSize: "150%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "1rem"
        },
        [theme.breakpoints.between(800,1000)]: {
            
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: "1rem"
        },
    },
    githubLogo: {
        color: "#ffffff",
        fontSize: "400%",
        [theme.breakpoints.down('sm')]: {
            marginRight: "1rem"
        },
        [theme.breakpoints.between(800,1000)]: {
            marginLeft: "5rem"
        },
        [theme.breakpoints.up("md")]: {
            marginRight: "1rem"
        },
    },
    githubText: {
        color: "#000000",
        fontSize: "150%",
        [theme.breakpoints.down('sm')]: {
            
        },
        [theme.breakpoints.between(800,1000)]: {
            marginRight: "2.25rem"
        },
        [theme.breakpoints.up("md")]: {
            marginRight: "2.75rem"
        },
    },
    facebookLogo: {
        color: "#ffffff",
        fontSize: "400%",
        [theme.breakpoints.down('sm')]: {
            marginRight: "0.5rem"
        },
        [theme.breakpoints.between(800,1000)]: {
            marginLeft: "5rem"
        },
        [theme.breakpoints.up("md")]: {
            marginRight: "1rem"
        },
    },
    facebookText: {
        color: "#000000",
        fontSize: "150%",
        [theme.breakpoints.down('sm')]: {
            
        },
        [theme.breakpoints.between(800,1000)]: {
            marginRight: "2.5rem"
        },
        [theme.breakpoints.up("md")]: {
            marginRight: "4rem"
        },
    },
    mailLogo: {
        color: "#ffffff",
        fontSize: "400%",
        [theme.breakpoints.down('sm')]: {
            marginRight: "1rem"
        },
        [theme.breakpoints.between(800,1000)]: {
            marginRight: "0.5rem"
        },
        [theme.breakpoints.up("md")]: {
            marginRight: "0.75rem"
        },
    },
    mailText: {
        color: "#000000",
        fontSize: "150%",
        [theme.breakpoints.down('sm')]: {
            marginRight: "8rem"
        },
        [theme.breakpoints.between(800,1000)]: {
            marginRight: "5rem"        
        },
        [theme.breakpoints.up("md")]: {
            marginRight: "11rem"
        },
    },
    reserveSpace: {
        color: "#000000",
        fontSize: "0.5%",
        [theme.breakpoints.down('sm')]: {
            marginTop: "10rem"
        },
        [theme.breakpoints.between(800,1000)]: {
            marginTop: "23rem"        
        },
        [theme.breakpoints.up("md")]: {
            marginTop: "0.5rem"
        },
    }
}));

function Contact(props) {

    const classes = useStyles();

    props.onContactRender(bwDiagonally);
    return(
        <>
            <Header btnColor="#ffffff" borderColor="#ffffff" backgroundColor="#000000"/>
            <Container className={classes.reachMeontainer}>
                <Typography variant='overline' className={classes.reachMeVia}>
                    Reach {" "}
                </Typography>
                <Typography variant='overline' style={{color: "#000000"}} className={classes.reachMeVia}>
                    me via
                </Typography>
            </Container>
            <br/>
            <Container>
                <a href="https://www.linkedin.com/in/youssef-khaled-906055187" style={{textDecoration: "none"}}>
                <LinkedIn className={classes.linkedInLogo}/>
                <Typography variant="overline" className={classes.linkedInText}>
                    Linkedin
                </Typography>
                </a>
            </Container>
            <br/>
            <Container style={{display: "table"}}>
                <a href="https://github.com/yossef-khaled" style={{textDecoration: "none"}}>
                    <GitHub className={classes.githubLogo}/>
                    <Typography variant="overline" className={classes.githubText}>
                        GitHub
                    </Typography>
                </a>
                
            </Container>
            <br/>
            <Container style={{display: "table"}}>
                <a href="https://www.facebook.com/yossef.khalid.3" style={{textDecoration: "none"}}>
                <Facebook className={classes.facebookLogo}/>
                <Typography variant="overline" className={classes.facebookText}>
                    FaceBook
                </Typography>
                </a>
            </Container>
            <br/>
            <Container style={{display: "table"}}>
                <a href="mailto:yossef.k.y333@gmail.com" style={{textDecoration: "none"}}>
                    <Mail className={classes.mailLogo}/>
                    <Typography variant="overline" className={classes.mailText}>
                        Gmail
                    </Typography>
                </a>
                <h1 className={classes.reserveSpace}>
                    hi
                </h1>
            </Container>
        </>
    );
} 

export default Contact;