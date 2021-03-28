// import logo from './logo.svg';
import './App.css';
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import MainNav from './components/MainNav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  // const btnHandle = () => {
  //   toast.success("Data transfer finished", {
  //     position: "top-center"
  //   });
  // }


  return (
    <div className="App">
      <Router>

        {/* <ToastContainer />
        <h1>Testing Fonts new line added</h1>
        <Button color="primary" outline onClick={btnHandle}>React Button</Button> */}
        {/* <Header /> */}
        <MainNav />
        <Route path="/" component={Home} exact />
        <Route path="/all-courses" component={AllCourses} exact />
      </Router>

    </div>
  );
}

export default App;
