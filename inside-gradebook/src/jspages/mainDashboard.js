import '../csspages/mainDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';



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

        <div className="studentLists">
            <div className="studentAlertListTop">

            </div>

            <div className="allStudentsList">

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
                            <h1 className="studentGradeLevelText">12</h1>
                        </div> 
                    </div>

             <div className="studentRatingDiv">
                    <div className="studentRatingLogo">
                        <img className="studentRatingLogoIcon" src="../imgres/icons8-star.gif" alt="Rating Logo" />
                        </div>
                    <div className="studentRatingTextDiv">
                        <h1 className="studentRatingText">On Track</h1>
                    </div>
                </div>

            </div>

        </div>
        </div>
        </div>
      );
    }
    
    export default MainDashboard;
    
