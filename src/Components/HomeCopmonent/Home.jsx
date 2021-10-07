//Import from react 
import React from 'react';

//Improt from material-ui
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

//Import from other components
import Header from '../HeaderComponent/Header';

//Import data
import bwHorizontally from '../../Shared/images/black-white-horizontally.jpg';
import me from "../../Shared/images/me.jpg";

//Others
import { PropTypes } from 'prop-types';

const styles = {
    myPhoto: {
        marginTop: "10%",
        marginLeft: "40%",
        height: "15rem",
        width: "15rem"
    },
    blacked: {
        color: "#000000"
    }
};


function Home(props) {
    
    const {classes} = props;
    props.onHomeRender(bwHorizontally);

    return(
        <div>
            <Header btnColor="#ffffff" borderColor="#ffffff" backgroundColor="#000000"/>
            <h2>𝕄𝕪 𝕟𝕒𝕞𝕖 𝕚𝕤 𝕐𝕠𝕦𝕤𝕤𝕖𝕗 𝕂𝕙𝕒𝕝𝕖𝕕, 𝕀 𝕒𝕞 𝕒 𝕨𝕖𝕓 𝕕𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣.</h2>
            <Avatar alt="Photo of me" src={me} className={classes.myPhoto}/>
            <h3 className={classes.blacked}> - Most of the time I play football , in my free times I do some "typin in keyboard" stuff.</h3>
            <br/>
            <h3 className={classes.blacked} >First computer I saw was in : 26-10-2018</h3>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(Home);