//Import from react 
import React from 'react';

//Improt from material-ui
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery, makeStyles, useTheme } from '@material-ui/core';

//Import from other components
import Header from '../HeaderComponent/Header';

//Import data
import bwHorizontally from '../../Shared/images/black-white-horizontally.jpg';
import me from "../../Shared/images/me.png";

const useStyles = makeStyles(theme => ({
    myPhoto: {
        marginLeft: "auto",
        marginRight: "auto",
        height: "14rem",
        width: "14rem",
        marginTop: "rem",
        [theme.breakpoints.up('sm')]: {
            height: "13rem",
            width: "13rem",
            
        },
        [theme.breakpoints.down('sm')]: {
            height: "11.5rem",
            width: "11.5rem",
            
        },
        [theme.breakpoints.up('md')]: {
            height: "15rem",
            width: "15rem",
        },
        [theme.breakpoints.up('lg')]: {
            height: "15rem",
            width: "15rem",
        },
    },
    personalInfo: {
        fontSize: "105%",
        [theme.breakpoints.up('sm')]: {
            fontSize: "125%",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "150%",  
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "155%",
        },
    }
}));


function Home(props) {
    
    props.onHomeRender(bwHorizontally);
    const classes = useStyles();
    
    //To use the media query for conditional rendering we can use 'isMeduim' (or whatever screen size) as :
    //const theme = useTheme();
    //const isMeduim = useMediaQuery(theme.breakpoints.up('md'));

    return(
        <div>
            <Header  btnColor="#ffffff" borderColor="white" backgroundColor="#000000"/>
            <Typography variant="overline" className={classes.personalInfo}>
                Hey, My name is Youssef khaled.
            </Typography>
            <br/>
            <Typography variant="overline" className={classes.personalInfo}>
                I'm a full stack web developer
                <br/>
                I use (MERN & .NET)
            </Typography>
            <Avatar alt="Photo of me" src={me} className={classes.myPhoto}/>
            <Typography variant="overline" className={classes.personalInfo} style={{color: "#000000"}}>
                Most of the time I play football , in my free times I do some "typin in keyboard" stuff.
            </Typography>
            <br/>
            <Typography variant="overline" className={classes.personalInfo} style={{color: "#000000"}}> 
                This is my portfolio, thanks for stoping by.
            </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Home;