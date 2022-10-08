import '../csspages/mainDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {React, useEffect, useState} from 'react'
import {Link}   from 'react-router-dom';

var gradeColors = {    "Red": "#FFC3BB",
                    "Yellow": "#F4DE90",
                    "Green": "#C3ECC7",
};


function MainDashboard() {
    return (
      <div className="MainDashboard">
        <div className="teacherSideBar">
            <div className="teacherDetailTop">
                <div className="teacherProfileInformation">
                    <div className="teacherProfilePicture">
                        <img className="teacherProfilePhoto" src="./imgres/bcookepfp.jpg" alt="Profile Picture" />
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
                        <img className="classLogoIcon" src="../imgres/icons8-calculator.gif" alt="Class Logo" />
                     </div>
                    <div className="classTextDiv">
                    <Link to='/mainDashBoard'>
                        <h1 className="classText">Calculus 1</h1>
                        </Link>
                        
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
                
                <div className="studentTemplateDiv">
                    <div className="studentGrade" style={{backgroundColor: gradeColors.Red,  borderRadius: 4}}>
                        <h1 className="studentGradeText">F</h1>
                        <h2 className="studentGradeTextSubtitle">42%</h2>
                    </div>
                    <div className="studentProfilePicture">
                        <img className="studentProfilePhoto" src="./imgres/bcookepfp.jpg" alt="Profile Picture" />
                    </div>
                    <div className="studentName">
                        <h1 className="studentNameText">John Doe</h1>
                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                        </div> 
                    </div>
             <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-error-96.png" alt="Rating Logo" />
                        </div>
                    <div className="studentRatingTextDiv">
                        <h1 className="studentRatingText">Needs Attention</h1>
                    </div>
                </div>
                </div>

                <div className="studentTemplateDiv">
                    <div className="studentGrade" style={{backgroundColor: gradeColors.Green,  borderRadius: 4}}>
                        <h1 className="studentGradeText">A</h1>
                        <h2 className="studentGradeTextSubtitle">100%</h2>
                    </div>
                    <div className="studentProfilePicture">
                        <img className="studentProfilePhoto" src="./imgres/bcookepfp.jpg" alt="Profile Picture" />
                    </div>
                    <div className="studentName">
                        <h1 className="studentNameText">John Doe</h1>
                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                        </div> 
                    </div>
             <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-error-96.png" alt="Rating Logo" />
                        </div>
                    <div className="studentRatingTextDiv">
                        <h1 className="studentRatingText">Needs Attention</h1>
                    </div>
                </div>
                </div>
                <div className="studentTemplateDiv">
                    <div className="studentGrade" style={{backgroundColor: gradeColors.Green,  borderRadius: 4}}>
                        <h1 className="studentGradeText">A</h1>
                        <h2 className="studentGradeTextSubtitle">100%</h2>
                    </div>
                    <div className="studentProfilePicture">
                        <img className="studentProfilePhoto" src="./imgres/bcookepfp.jpg" alt="Profile Picture" />
                    </div>
                    <div className="studentName">
                        <h1 className="studentNameText">John Doe</h1>
                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                        </div> 
                    </div>
             <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-error-96.png" alt="Rating Logo" />
                        </div>
                    <div className="studentRatingTextDiv">
                        <h1 className="studentRatingText">Needs Attention</h1>
                    </div>
                </div>
                </div>
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
                <div className="studentTemplateDiv">
                    <div className="studentGrade">
                        <h1 className="studentGradeText">A</h1>
                        <h2 className="studentGradeTextSubtitle">100%</h2>
                    </div>
                    <div className="studentProfilePicture">
                        <img className="studentProfilePhoto" src="./imgres/bcookepfp.jpg" alt="Profile Picture" />
                    </div>
                    <div className="studentName">
                        <h1 className="studentNameText">John Doe</h1>
                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                        </div> 
                    </div>
             <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-checkmark.gif" alt="Rating Logo" />
                        </div>
                    <div className="studentRatingTextDiv">
                        <h1 className="studentRatingText">On Track</h1>
                    </div>
                </div>

                
                </div>

                <div className="studentTemplateDiv">
                    <div className="studentGrade">
                        <h1 className="studentGradeText">A</h1>
                        <h2 className="studentGradeTextSubtitle">100%</h2>
                    </div>
                    <div className="studentProfilePicture">
                        <img className="studentProfilePhoto" src="./imgres/bcookepfp.jpg" alt="Profile Picture" />
                    </div>
                    <div className="studentName">
                        <h1 className="studentNameText">John Doe</h1>
                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                        </div> 
                    </div>
             <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-checkmark.gif" alt="Rating Logo" />
                        </div>
                    <div className="studentRatingTextDiv">
                        <h1 className="studentRatingText">On Track</h1>
                    </div>
                </div>

                
                </div>

                <div className="studentTemplateDiv">
                    <div className="studentGrade">
                        <h1 className="studentGradeText">A</h1>
                        <h2 className="studentGradeTextSubtitle">100%</h2>
                    </div>
                    <div className="studentProfilePicture">
                        <img className="studentProfilePhoto" src="./imgres/bcookepfp.jpg" alt="Profile Picture" />
                    </div>
                    <div className="studentName">
                        <h1 className="studentNameText">John Doe</h1>
                        <div className="studentGradeLevel">
                            <h1 className="studentGradeLevelText">Grade 12</h1>
                        </div> 
                    </div>
             <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-checkmark.gif" alt="Rating Logo" />
                        </div>
                    <div className="studentRatingTextDiv">
                        <h1 className="studentRatingText">On Track</h1>
                    </div>
                </div>

                
                </div>

                </div>
            </div>

            </div>
        </div>

      );
    }
    
    export default MainDashboard;
    
