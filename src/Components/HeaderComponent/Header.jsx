//Import from react
import React from 'react';

//Import from material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

//Import Header style
import './HeaderStyle.css';

//Others
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
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
}

function Header(props) {

    const { classes } = props;

    return(
        <div className>
            <AppBar position="static">
                <Toolbar className="header" style={{
                    backgroundColor: props.backgroundColor
                }}>
                    <IconButton>
                        <Button>
                            <Link 
                                to="/education" className={classes.headerButton}
                                style={{color: props.btnColor, borderColor:props.borderColor}}
                            >
                                Education
                            </Link>
                        </Button>
                    </IconButton>
                    <IconButton>
                        <Button>
                            <Link 
                                to="/projects" className={classes.headerButton}
                                style={{color: props.btnColor,
                                        borderColor: props.borderColor,
                                    }}
                            >
                                Projects
                            </Link>
                        </Button>
                    </IconButton>
                    <IconButton>
                        <Button>
                            <Link 
                                to="/contact" className={classes.headerButton}
                                style={{color: props.btnColor, borderColor:props.borderColor}}
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

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);