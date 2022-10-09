import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div className="landingPage">
       <div className="leftSide">
        <div className="landingImageDiv">
          <img className="landingPageImage" src="./imgres/Online_education.png" alt="Online Education Image" />      
        </div>
      </div>
      <div className="rightSide">
        <div className="rightSideContent">
        <div className="contentTitle">
          <h1 className="mainTitle">InsideTheGradebook</h1>
          </div>
          <div className="contentDetailedText">
            <p>Inside The Gradebook provides a clean, simple, and easy way to view student progress
              overview. View your student's progress in a new way, allowing for a more impactful and
              immersive teaching experience.  </p>
          
        </div>
        
        </div>


        </div>
    </div>
    </div>
  );
}

export default App;
