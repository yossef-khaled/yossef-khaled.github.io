//Import from material-ui
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Mail } from '@material-ui/icons';

//Import data
import bwDiagonally from '../../Shared/images/black-white-diagonally.png';

//Import from other components
import Header from '../HeaderComponent/Header';

function Contact(props) {

    props.onContactRender(bwDiagonally);
    return(
        <>
            <Header btnColor="#ffffff" borderColor="#ffffff" backgroundColor="#000000"/>
            <Container style={{marginTop: "6%", marginLeft: "11.25%"}}>
                <Typography variant='overline' style={{fontSize: '200%',}}>
                    Reach {" "}
                </Typography>
                <Typography variant='overline' style={{fontSize: '200%', color: "#000000",}}>
                    me via
                </Typography>
            </Container>
            <br/>
            <br/>
            <Container style={{display: "table"}}>
                <a href="https://www.linkedin.com/in/youssef-khaled-906055187" style={{textDecoration: "none"}}>
                <LinkedIn style={{ marginLeft: "4%", fontSize: "400%", color:"white"}}/>
                <Typography variant="overline" style={{marginLeft: "2.5%", fontSize: "150%", color: "#000000"}}>
                    Linkedin
                </Typography>
                </a>
            </Container>
            <br/>
            <Container style={{display: "table"}}>
                <a href="https://github.com/yossef-khaled" style={{textDecoration: "none"}}>
                    <GitHub style={{marginRight: "2%", fontSize: "400%", color: "white"}}/>
                    <Typography variant="overline" style={{marginRight: "3%", fontSize: "150%", color: "#000000"}}>
                        GitHub
                    </Typography>
                </a>
                
            </Container>
            <br/>
            <Container style={{display: "table"}}>
                <a href="https://www.facebook.com/yossef.khalid.3" style={{textDecoration: "none"}}>
                <Facebook style={{marginRight: "2.5%", fontSize: "400%", color:"white"}}/>
                <Typography variant="overline" style={{marginRight: "4%", fontSize: "150%", color: "#000000"}}>
                    FaceBook
                </Typography>
                </a>
            </Container>
            <br/>
            <Container style={{display: "table"}}>
                <a href="mailto:yossef.k.y333@gmail.com" style={{textDecoration: "none"}}>
                    <Mail style={{marginRight: "2%", fontSize: "400%", color: "white"}}/>
                    <Typography variant="overline" style={{marginRight: "14%", fontSize: "150%", color: "#000000"}}>
                        Gmail
                    </Typography>
                </a>
            </Container>
            <br/>
            <br/>
            <br/>
        </>
    );
} 

export default Contact;