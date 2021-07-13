import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from 'reactstrap';
import './style.css';

const styles = {
    root: {
        flexGrow: "1",
    },
    headerButton : {
        color: "#ffffff",
        borderRadius: "0.25em",
    },
}

function Header(props) {

    const { classes } = props;  

    return(
        <div >
            <AppBar position="static">
                <Toolbar className="header">
                    <Box borderColor="text.primary">
                        <Button borderColor="white" color={`${props.color}`}>
                            Projects
                        </Button>
                    </Box>
                    <IconButton>
                        <Button>
                            Resume
                        </Button>
                    </IconButton>
                    <IconButton>
                        <Button>
                            Contact
                        </Button>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>

    )
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);