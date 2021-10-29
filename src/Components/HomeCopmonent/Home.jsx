//Import from react 
import React, {useEffect, useState} from 'react';

//Improt from material-ui
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery, makeStyles, useTheme } from '@material-ui/core';

//Import from other components
import Header from '../HeaderComponent/Header';

//Import data
import bwHorizontally from '../../Shared/images/black-white-horizontally.jpg';
import me from "../../Shared/images/me.png";
import myCV from '../../Shared/Data/Youssef-Khaled-CV.pdf';

//Import style
import './HomeStyle.css';

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
        fontSize: "95%",
        [theme.breakpoints.up('sm')]: {
            fontSize: "125%",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "150%",  
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "155%",
        },
    },
    downloadCVContainer: {
        float: "right",
        marginRight: "2rem",
        backgroundColor: "#000000",
        padding: "2rem",
        borderRadius: "0.35rem",
        [theme.breakpoints.down('sm')]: {
            marginRight: "0.25rem"
        },
        [theme.breakpoints.between(700, 800)]: {
            float: "none",
            marginRight: "15rem",
            marginLeft: "15rem",
            textAlign: "center"
        },
        
    },
    downloadCV: {
        fontSize: "100%",
    }
}));


function Home(props) {

    const [fade, setFade] = useState('fadeIn');

    props.onHomeRender(bwHorizontally);
    const classes = useStyles();
    
    useEffect(() => {
        setTimeout(() => {
            setFade('fadeOut');
        }, 7000)
    });

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
                This is my portfolio, thanks for stopping by.
            </Typography>
            <br/>
            <div className={fade}>
                <div className={classes.downloadCVContainer}>
                    <a href={myCV} download style={{color: "#ffffff", textDecoration: "none"}}>
                        <Typography variant="overline" className={classes.downloadCV}>
                            Download my cv
                        </Typography>
                    </a>
                </div>
            </div>
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