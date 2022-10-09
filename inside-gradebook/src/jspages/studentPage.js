import '../csspages/studentpage.css'
import {Button} from 'react-bootstrap'
import {DataChart, LineChart} from '../jspages/Datachart'
import {useLocation} from 'react-router-dom'
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios'




function StudentPage(){     

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let [resonse, setResponse] = useState(null);
    let [studentList, setStudentList] = useState("");
    let [display_name, setDisplayName] = useState("");
    let navigate = useNavigate();
    const location = useLocation();
    let name = location.state.name;

    function loadProfile() {
        setLoading(true);
        axios.get("http://localhost:1234/searchDatabase", {
        }).then(function (response) {
            setStudentList(response.data.student);
            console.log(studentList);
            setResponse(response.data);
            setError(null);
            setLoading(false);
            console.log(studentList);
            // handle success
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
            .then(function (response) {
            });
    }
    
    

        useEffect(() => {
            loadProfile();
        }, []);



    return (
        <div className="studentPage">

            <div className="studentPageLeftSide">

                <div className="studentPageLeftTopContent">

            <div className="studentPageLeftTopContentImage" >
                <img className="userProfileImageLeft" src="./imgres/JeffreyWilson.jpg" alt="Online Education Image" />
            </div>
            <div className="studentPageLeftTopContentText">
            <h1 className="studentPageLeftTopContentTextName">Jeffrey Wilson</h1>
            <h1 className="studentPageLeftTopContentTextGrade">Grade: 12</h1>
            </div>

            <div className="studentPageLeftTopContentLetterGrade">
            <h1 className="studentPageLeftTopContentTextLetterGrade">Letter Grade:</h1>
            <h1 className="studentPageLeftTopContentLetterGrade"> A</h1>
            </div>
                    </div>

        <div className="studentPageBottomLeftContent">
            <div className="studentReportBottom">

            <div className="ratingStudentPage">
                <h1 className="ratingStudentPageText">Rating:</h1>
                <div className="ratingIconAndStatus">
                <img className="ratingIconImage" src="./imgres/icons8-checkmark.gif" alt="Online Education Image" />
                <h1 className="ratingStudentPageRate">On Track!</h1>
                </div>
            </div>



            </div>

            </div>
      </div>

        <div className="studentPageRightSide">  
        <div class="chart-container">
            <LineChart/>
            </div>
            <div className="studentPageRightContent">
            

                <div className="assignmentTableList">
                <div className="assignmentTableTitle">
                    <h1 className="assignmentTableTitleText">Assignments</h1>
                </div>

                    <table className="assignmentTable">
                        <tr>
                            <th>Assignment</th>
                            <th>Grade</th>

                        </tr>
                        <tr>
                            <td>English Exam</td>
                            <td>90%</td>
                        </tr>   
                        <tr>
                            <td>Science Homework</td>
                            <td>96%</td>
                        </tr>
                        <tr>
                            <td>Math Quiz</td>
                            <td>100%</td>
                        </tr>
                    </table>

            </div>
        </div>

        </div>
        </div>


    );
}

export default StudentPage