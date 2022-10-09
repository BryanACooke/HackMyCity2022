import '../csspages/mainDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Table} from 'react-bootstrap';
import {React, useEffect, useState} from 'react'
import {Link}   from 'react-router-dom';
import axios from 'axios';
import { useNavigate} from "react-router-dom"

var gradeColors = {    "Red": "#FFC3BB",
                    "Yellow": "#F4DE90",
                    "Green": "#C3ECC7",
};

function MainDashboard() {
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [response, setResponse] = useState("");
const [studentList, setStudentList] = useState("");
const [studentListTwo, setStudentListTwo] = useState("");


let navigate = useNavigate();


function viewMoreButton(id){
    navigate("/studentPage", {state:{id}});

}




 function getData() {
    setLoading(true);
    axios.get("http://10.12.55.219:1234/getAllStudents", {
    }).then(function (response) {
        setStudentList(response.data.student);
        setResponse(response.data);
        setError(null);
        setLoading(false);
        // handle success
    }).catch(function (error) {
        // handle error
        console.log(error);
    })
        .then(function (response) {
        });
}


function loadProfile() {
    setLoading(true);
    axios.get("http://10.12.55.219:1234/searchDatabase", {
    }).then(function (response) {
        setStudentListTwo(response.data.student);
        console.log(studentList);
        setResponse(response.data);
        setError(null);
        setLoading(false);
        console.log(studentListTwo);
        // handle success
    }).catch(function (error) {
        // handle error
        console.log(error);
    })
        .then(function (response) {
        });
}


useEffect( () => {
    getData();
    loadProfile();
    
}, [])






    return (
      <div className="MainDashboard">
        <div className="teacherSideBar">
            <div className="teacherDetailTop">
                <div className="teacherProfileInformation">
                    <div className="teacherProfilePicture">
                        <img className="teacherProfilePhoto" src="./imgres/JeffreyWilson.jpg" alt="Profile Picture" />
                        </div>
                    <div className="teacherName">

                    <h1 className="teacherNameText">John Doe</h1>
            
                        
                    </div>
                    <div className="teacherPosition">
                        <h1 className="teacherPositionText">Teacher</h1>
                    </div>
                </div>
            </div>
            <div className="teacherDetailBottom">
                <div className="classesTitle">
                    <h1 className="classesTitle">Your Classes</h1>
                </div>
                <div className="classList">


                <div className="classExample"> 
                     <div className="classOneLogo">
                        <img className="classLogoIcon" src="../imgres/icons8-index-96.png" alt="Class Logo" />
                     </div>
                    <div className="classTextDiv">
                    <Link to='/mainDashBoard'>
                        <h1 className="classText">Overview</h1>
                        </Link>
                        
                     </div>
                     </div>


                    <div className="classExample"> 
                     <div className="classOneLogo">
                        <img className="classLogoIcon" src="../imgres/icons8-calculator.gif" alt="Class Logo" />
                     </div>
                    <div className="classTextDiv">
                        <h1 className="classText">Calculus 1</h1>
                        
                     </div>
                     </div>

                                         
                    <div className="classExample"> 
                     <div className="classOneLogo">
                        <img className="classLogoIcon" src="../imgres/icons8-calculator.gif" alt="Class Logo" />
                     </div>
                    <div className="classTextDiv">
                        <h1 className="classText">Pre-Calculus </h1>
                     </div>
                     </div>
                </div>
            </div>
        </div>

        <div className="studentListMainClass">
        <div className="studentLists">
            <div className="studentAlertListTop">
                <h1 className="studentAlertListTitle">Student Alerts</h1>
                <Table className="studentTableList"> 
                    <tbody>
                        <tr>
                            <td>
                                <div className="studentGrade" style={{backgroundColor: gradeColors.Red,  borderRadius: 4}}>
                                <h1 className="studentGradeText"> F </h1>
                                <h1 className="studentGradeTextSubtitle"> 42% </h1>
                                </div>
                            </td>
                            <td><div className="studentProfilePicture">
                                 <img className="studentProfilePhoto" src="./imgres/JeffRoberts.jpg" alt="Profile Picture" />
                                </div></td> 
                            <td>
                        <h1 className="studentNameText">Jeff Roberts</h1>

                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                            <Button className="viewMoreButtonStudent">View Student</Button>
                        </div> 
                            </td>
                            <td>
                            <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-error-96.png" alt="Rating Logo" />

                    <div className="studentRatingTextDiv">
                        
                        <h1 className="studentRatingText">Needs Attention</h1>
                        <ul>
                        <li className="studentTag">Math</li>
                        <li className="studentTag">Science</li>
                    </ul> 
                    </div>
                    </div>
                    <div>
                    </div>
                </div>
                     </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>

            
           <div className="allStudentsList">

           <div className="studentLists">
            <div className="titleAndFormSearch">
                <h1 className="allStudentsListTitle">All Students</h1>
            <div className="formInputSearch">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="searchButtonStudents" variant="outline-success">Search</Button>
          </Form>
          </div>
          </div>
          <Table className="studentTableList"> 
                    <tbody>
                        
                        {studentList && studentList.map(searchResults => {    
                                     console.log(studentList);        
                                     return (
                        <tr>
                            <td key={searchResults.id}>
                                <div className="studentGrade" >
                                <h1 className="studentGradeText"> {searchResults.Letter} </h1>
                                <h1 className="studentGradeTextSubtitle"> {searchResults.Rating+ "%"} </h1>
                                </div>
                            </td>
                            <td>
                                <div className="studentProfilePicture">
                                 <img className="studentProfilePhoto" src= {"../imgres/faces/" +  searchResults.Name + ".jpg"} alt="Profile Picture" />
                                </div></td> 
                            <td>
                        <h1 className="studentNameText">{searchResults.Name}</h1>
                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                            <Button key={searchResults.id}  className="viewMoreButtonStudent "
                                                     value={searchResults}
                                                     onClick={() => viewMoreButton(searchResults.id)}
                                                 >
                                                     <div className="viewMoreButtonStudent ">
                                                         View Student!                                                         
                                                             </div>
                                                     
                                                 </Button> 
                        </div>  
                            </td>
                            <td>
                            <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-checkmark.gif" alt="Rating Logo" />

                    <div className="studentRatingTextDiv">
                        
                        <h1 className="studentRatingText">All Good</h1>
                    </div>
                    </div>
                    <div>
                    </div>
                </div>
                     </td>
                     </tr>
                            )
                                    })}

                    </tbody>
                    </Table>


                </div>
            </div>


            </div>


        </div>

      );
    }
    
    export default MainDashboard;
    
