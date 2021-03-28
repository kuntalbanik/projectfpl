import logo from '../logo.svg';
import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";

const Course = ({ course }) => {

    // {"id":1,"name":"Sachin Tendulkar","country":"India","profile_img":"/images/1.jpg","dob":"1973-04-24","birthplace":"Bombay (now Mumbai), Maharashtra","height":"5 ft 5 in","role":"Batsman","batting_style":"Right Handed Bat","bowling_style":"Right-arm legbreak","records":["Test,200,329,33,15921,248,53.79,29437,54.08,51,6,68,2058,69,145,4240,2492,46,3/10,3/14,3.53,54.17,92.17,0,0","ODI,463,452,41,18426,200,44.83,21367,86.24,49,1,96,2016,195,270,8054,6850,154,5/32,5/32,5.1,44.48,52.3,2,0","T20I,1,1,0,10,10,10.0,12,83.33,0,0,0,2,0,1,15,12,1,1/12,1/12,4.8,12.0,15.0,0,0","IPL,78,78,9,2334,100,33.83,1948,119.82,1,0,13,295,29,4,36,58,0,0/7,0/7,9.67,0.0,0.0,0,0"]


    return (
        <Card className="text-left">
            <CardBody>
                <CardImg style={{ width: 200 }} src={course.profile_img} alt="Profile Image" />
                <CardTitle tag="h5">{course.name}</CardTitle>
                <CardSubtitle tag="h5" className="mb-3 text-muted">{course.country}</CardSubtitle>
                <CardText tag="h6"><span style={{ 'fontWeight': 'bold' }}>DOB : </span>{course.dob}</CardText>
                <CardText tag="h6"><span style={{ 'fontWeight': 'bold' }}>Birth Place : </span>{course.birthplace}</CardText>
                <CardText tag="h6"><span style={{ 'fontWeight': 'bold' }}>Height : </span>{course.height}</CardText>
                <CardText tag="h6"><span style={{ 'fontWeight': 'bold' }}>Player Role : </span>{course.role}</CardText>
                <CardText tag="h6"><span style={{ 'fontWeight': 'bold' }}>Batting Style : </span>{course.batting_style}</CardText>
                <CardText tag="h6"><span style={{ 'fontWeight': 'bold' }}>Bowling Style : </span>{course.bowling_style}</CardText>
                {/* <Container className="text-center">
                    <Button color="warning">Update</Button>
                    <Button color="danger ml-3">Delete</Button>
                </Container> */}
            </CardBody>
        </Card>

    )
}

export default Course;