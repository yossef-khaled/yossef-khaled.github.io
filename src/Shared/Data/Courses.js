//Import organizations logos 
import ITI from '../../Shared/images/ITI.png';
import Coursera from '../../Shared/images/Coursera.png';
import Udacity from '../../Shared/images/Udacity.png';

//Import courses certificates
import itiCertificate from '../Data/Certificates/ITI_Certificate.PNG';
import specializationCertificate from '../Data/Certificates/Web_Specialization_Certificate.PNG';
import htmlCertificate from '../Data/Certificates/HTML_Certificate.PNG';
import cssCertificate from '../Data/Certificates/CSS_Certificate.PNG';
import jsCertificate from '../Data/Certificates/JavaScript_Certificate.PNG';
import responsiveDesignCertificate from '../Data/Certificates/Responsive_Design_Certificate.PNG';
import capstoneCertificate from '../Data/Certificates/Capstone_Certificate.PNG';
import nanoDegreeCertificate from '../Data/Certificates/Nano_degree_certificate.JPG';

const COURSES_DATA = [
    {
        id: 0,
        name: '.NET Web Development',
        organization: 'ITI',
        organizationImg: ITI,
        date: 'Aug 2019 - Sep 2019',
        duration: '2 Months',
        type: 'course',
        details: [
            'C# Programming Language.',
            'Introduction to SQL Server and Relational Database concepts.',
            'MVC Desgined Pattern.',
            'LINQ and Entity Framework.'
        ],
        credentialId: null,
        certificate: itiCertificate,
    },
    {
        id: 1,
        name: 'Web Design for Everybody: Basics of Web Development & Coding Specialization',
        organization: 'Coursera',
        organizationImg: Coursera,
        date: 'Feb 2020 - Apr 2020',
        duration: '3 Months',
        details: 'A Specialization Of Front End Web Development. It Consists Of the following 4 Courses And A Capstone.',
        type: 'specialization',
        courses: 
            [
                {
                    id: 0,
                    name: 'Introducrtion To HTML',
                    organization: 'Coursera',
                    organizationImg: Coursera,
                    date: 'Feb 2020',
                    duration: '2 weeks',
                    details: 'A brief introduction into HTML.',
                    type: 'course',
                    credentialId: '538CNR3FLQ9W',
                    certificate: htmlCertificate,
                },
                {
                    id: 1,
                    name: 'Introduction to CSS3',
                    organization: 'Coursera',
                    organizationImg: Coursera,
                    date: 'Feb 2020',
                    duration: '2 Weeks',
                    details: 'A brief introduction into CSS3.',
                    type: 'course',
                    credentialId: '96RZDDCNP64L',
                    certificate: cssCertificate,
                },
                {
                    id: 2,
                    name: 'Interactivity With JavaScript',
                    organization: 'Coursera',
                    organizationImg: Coursera,
                    date: 'Mar 2020',
                    duration: '1 month',
                    details: 'Make A web page more dynamic and handle user inputs using javascript.',
                    type: 'course',
                    credentialId: 'S6UT3LJT93HL',
                    certificate: jsCertificate,
                },
                {
                    id: 3,
                    name: 'Advanced Styling with Responsive Design',
                    organization: 'Coursera',
                    organizationImg: Coursera,
                    date: 'Apr 2020',
                    duration: '2 weeks',
                    details: 'Make a web page responsive to the size of the screen the user is using.',
                    type: 'course',
                    credentialId: 'VY7HM8J3THYN',
                    certificate: responsiveDesignCertificate,
                },
                {
                    id: 4,
                    name: 'Web Design for Everybody Capstone',
                    organization: 'Coursera',
                    organizationImg: Coursera,
                    date: 'Apr 2020',
                    duration: '2 Weeks',
                    details: 'Capstone for the course.',
                    type: 'course',
                    credentialId: 'DV3W8U7W3J4V',
                    certificate: capstoneCertificate,
                },
            ],
        credentialId: 'TV7NZ6XY7P72',
        certificate: specializationCertificate
    },
    {
        id: 7,
        name: 'Server-side Development with NodeJS, Express and MongoDB',
        organization: 'Coursera',
        organizationImg: Coursera,
        date: 'Sep 2020',
        duration: '1 Month',
        details: 'Learn REST API with express, body-parser, & morgan modules, Express-router to route, Mongoose module for the database.',
        type: 'course',
        credentialId: null,
        certificate: null,
    },
    {
        id: 8,
        name: 'Web Development Nano Degree Professional Track',
        organization: 'Udacity',
        organizationImg: Udacity,
        date: 'July 2020 - Aug 2020',
        duration: '6 Weeks',
        details: 'Learn Advanced Javascript, DOM Methods & Working With APIs.',
        type: 'course',
        credentialId: null,
        certificate: nanoDegreeCertificate,
    },
    {
        id: 9,
        name: 'Front-End Web Development With React',
        organization: 'Coursera',
        organizationImg: Coursera,
        date: 'Oct 2020 - May 2021',
        duration: '7 Months (Too much Due To My Military Service)',
        details: 'Learn How To Build Responsive, Interactive With The Back-end, Friendly UI/UX View With React.',
        type: 'course',
        credentialId: null,
        certificate: null,
    },
];

export default COURSES_DATA;