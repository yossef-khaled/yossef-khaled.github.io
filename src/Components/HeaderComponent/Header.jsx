//Import from react
import React from 'react';

//Import from material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useMediaQuery, makeStyles, useTheme } from '@material-ui/core';

//Others
import { Link } from 'react-router-dom';  

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: "none",
        [theme.breakpoints.down('sm')]: {
            flexGrow: "1",
        },
        [theme.breakpoints.up('sm')]: {
            flexGrow: "1"
        },
    },
    header: {
        position: "sticky",
        top: "0px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "45%",
        },
    },
    headerButton : {
        borderRadius: "0.25em",
        borderStyle: "solid",
        padding: "0.5em",
        borderWidth: "thin",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            width: "45%",
            fontSize: "38%",
            textAlign: "center"
        },
        [theme.breakpoints.up('sm')]: {
            width: "100%",
            fontSize: "50%",
            
        },
    },
    btnLink : {
        [theme.breakpoints.down('sm')]: {
            
        },
    }
}));

/*const styles = {
    root: {
        flexGrow: "1",
    },
    headerButton : {
        borderRadius: "0.25em",
        borderStyle: "solid",
        textDecoration: "none",
        padding: "0.5em",
        borderWidth: "thin"
    }
}*/

function Header(props) {

    const classes = useStyles();
    
    //To use the media query for  conditional rendering we can use 'isMeduim' (or whatever screen size) as :
    //const theme = useTheme();
    //const isMeduim = useMediaQuery(theme.breakpoints.up('md'));


    console.log(props.borderColor);
    return(
        <div style={{position: "sticky", top: "0"}}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.header} style={{
                    backgroundColor: props.backgroundColor
                }}>
                    
                    <IconButton>
                        <Button className={classes.headerButton}>
                            <Link 
                                to="/home" 
                                className={classes.btnLink}
                                style={{color: props.btnColor, borderColor: props.borderColor, textDecoration: "none"}}
                            >
                                Home
                            </Link>
                        </Button>
                    </IconButton>
                    <IconButton>
                        <Button className={classes.headerButton}>
                            <Link 
                                to="/education"
                                className={classes.btnLink}
                                style={{color: props.btnColor, borderColor:props.borderColor, textDecoration: "none"}}
                            >
                                Education
                            </Link>
                        </Button>
                    </IconButton>
                    <IconButton>
                        <Button className={classes.headerButton}>
                            <Link 
                                to="/projects" 
                                className={classes.btnLink}
                                style={{color: props.btnColor,
                                        borderColor: props.borderColor,
                                        textDecoration: "none"
                                    }}
                            >
                                Projects
                            </Link>
                        </Button>
                    </IconButton>
                    <IconButton>
                        <Button className={classes.headerButton}>
                            <Link 
                                to="/contact" 
                                className={classes.btnLink}
                                style={{color: props.btnColor, borderColor:props.borderColor, textDecoration: "none"}}
                            >
                                Contact
                            </Link>
                        </Button>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>

    )
};

export default Header;