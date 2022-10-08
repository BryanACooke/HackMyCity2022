import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <div className="contentTitle">
          <h1 className="mainTitle">InsideTheGradebook</h1>
          </div>
          <div className="contentDetailedText">
            <p>Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the
               industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. </p>
        </div>
        </div>
    </div>
    </div>
  );
}

export default App;
