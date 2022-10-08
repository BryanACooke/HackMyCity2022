import '../csspages/studentpage.css'
import {Button} from 'react-bootstrap'
import {DataChart, LineChart} from '../jspages/Datachart'



function StudentPage(){     
    return (
        <div className="studentPage">

            <div className="studentPageLeftSide">

                <div className="studentPageLeftTopContent">

            <div className="studentPageLeftTopContentImage" >
                <img className="userProfileImageLeft" src="./imgres/bcookepfp.jpg" alt="Online Education Image" />
            </div>
            <div className="studentPageLeftTopContentText">
            <h1 className="studentPageLeftTopContentTextName">Bryan Cooke</h1>
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

            <div className="printStudentReport">
                
                <Button className="printStudentReportButton">Print Student Report</Button>
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
                            <td>Assignment 1</td>
                            <td>100%</td>
                        </tr>   
                        <tr>
                            <td>Assignment 2</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Assignment 3</td>
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