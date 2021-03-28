import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Container } from "reactstrap";


const AllCourses = () => {

    // Using  "Hooks " without class component
    // "courses" for get all courses
    // "setCourses" for update / add courses
    const [courses, setCourses] = useState([
        // { title: "Java for Begineers", description: "Basic Fundamentals of Java Programming" },
        // { title: "Python Basics", description: "Fundamentals of Python Programming" },
        // { title: "Django", description: "Web development with Django" },
        // { title: "React JS", description: "Faster Frontend framework" },
    ]);

    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    }, []);

    // get all player details
    const getAllPlayers = () => {
        axios.get(`${base_url}`).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data)
                toast.success("Data successfully loaded", {
                    position: "top-center"
                });
            },
            (error) => {
                console.log(error)
            }
        )
    }

    // call players function
    useEffect(() => {
        getAllPlayers();
    }, []);


    return (
        <div>
            <ToastContainer />
            <Container>
                <h1>All Players</h1>
                <p>List of all players as follows</p>
            </Container>
            {
                courses.length > 0 ? courses.map((item) => (
                    <Course course={item} />
                )) : "No Players"
            }
        </div>
    )
}

export default AllCourses;