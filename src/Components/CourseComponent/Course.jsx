//Import from react
import { useState } from 'react'; 

//Import from material-ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

//Import style file 
import './CourseStyle.css'

//Others
import { Lightbox} from 'react-modal-image';

function Course(props) {

    const [isOpen, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <>
            <Container className='mainContainer'>
                <br/>
                <Typography variant="overline" style={{fontSize: '120%', color: '#aaa9a9'}}>
                    -{props.courseName}
                </Typography>
                <br/>
                <br/>
                <Typography variant="overline">
                    Organization {" "}
                </Typography>
                <br/>
                <a href={props.organization == 'ITI' ? 'https://www.iti.gov.eg' : `https://www.${props.organization}.com`}>
                        <img src={`${props.organizationImg}`}/>
                </a>
                <br/>
                <br/>
                <Typography variant="overline" style={{fontSize: "90%"}}>
                    STARTED ON
                </Typography>
                <br/>
                <Typography variant="overline">
                    {props.courseDate}
                </Typography>
                <br/>
                <br/>
                <Typography variant="overline" style={{fontSize: "90%"}}>
                    TOOK ME
                </Typography>
                <br/>
                <Typography variant="overline">
                    {props.courseDuration}
                </Typography>
                <br/>
                <br/>
                <Typography variant="overline" style={{fontSize: "90%"}}>
                    The course is all about 
                </Typography>
                <br/>
                {Array.isArray(props.courseDetails) ? props.courseDetails.map((detail) => {
                    return(
                        <>
                            <Typography variant="overline"> - {detail}</Typography>
                            <br/>
                        </>
                    )
                }) 
                : <Typography variant="overline">{props.courseDetails}</Typography>
                }
                <br/>
                <br/>
                {props.certificate ? 
                <Card style={{width: "50%", display: "inline-block"}}>
                    <CardMedia
                           component="img"
                           height="150"
                           image={props.certificate}
                           alt={`${props.courseName} Certificate`}
                    />
                    <CardActions>
                        <Button onClick={handleOpen}>SHOW CERTIFICATE</Button>
                        {props.credentialId ? 
                        <Typography variant='overline'>
                            Credential ID {props.credentialId}
                        </Typography> 
                        :
                        <></>
                        }
                        {isOpen && 
                        <Lightbox
                            medium={props.certificate}
                            large={props.certificate}
                            alt={`${props.courseName} Certificate`}
                            onClose={handleClose}
                        />}
                    </CardActions>
                </Card> 
                : 
                <Typography variant='overline' style={{color: "red"}}>
                    Couldn't get the certificate as the projects deadlines were overdue due to military service
                </Typography>
                }
                <br/>
                {props.courses ? props.courses.map((course) => 
                {
                    return(
                        <>
                            {course.id == 0 && <hr className='horizontalLine'/>}
                            <Course key={course.id}
                                    courseName={course.name}
                                    organization={course.organization}
                                    organizationImg={course.organizationImg}
                                    courseDate={course.date}
                                    courseDuration={course.duration}
                                    courseType={course.type}
                                    courseDetails={course.details}
                                    courses={course.courses}
                                    credentialId={course.credentialId}
                                    certificate={course.certificate}
                            />
                            {course.id != props.courses.length - 1 && <hr className='horizontalLine'/>}

                        </>
                    )
                }
                )
                    : <></>}
            </Container>
        </>
    );
}


export default Course;