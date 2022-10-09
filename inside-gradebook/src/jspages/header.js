import {React, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container, Form, Button, FormControl } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../csspages/header.css'
import {useNavigate} from "react-router-dom"



function Header(){
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    /* A hook that is used to get the current user and if the user is authenticated. */
    let navigate = useNavigate();
  
    return (
  <div className = "theBar">
  {/* The code for the header of the website. It is a navbar that has a link to the search page, a link to the top
  movies page, a link to the watchlist page, and a link to the user profile page. */}
  <Navbar  className= "testClass "  bg="" variant="dark">
    <Container id="containerMain">
    <Navbar.Brand className="fs-2"><Link to ="/">InsideTheGradebook</Link></Navbar.Brand>
    <Nav className="mx-right navholder">
    <Form className="d-flex align-items-center ">
    <Nav.Link  className="fs-4 elementTabTwo"><Link to ="/mainDashboard">Dashboard</Link></Nav.Link> 
        </Form>
  <h1 class="navBreaker">|</h1>
       <Navbar.Text id="textSignedInAs"><div id="bothTexts"><div id="firstText">Signed in as: </div>John Doe<div id="break">
       </div> </div><Link to="/mainDashboard"><div id="profilePicture">
       <img id="imgProfilePicture" src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
          width="55"
          height="55"
          alt="Profile Photo"
          
        />
       </div>
       </Link>
       </Navbar.Text>
       
   </Nav>
    </Container>
  </Navbar>
  </div>
      )
  }
  
  export default Header