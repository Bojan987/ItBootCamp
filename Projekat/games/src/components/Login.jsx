import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../services";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import loginImage from '../images/loginImage.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Container from "react-bootstrap/esm/Container";

export const Login = () => {
  const history = useHistory();
  const [logError, setLogError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [userLoggingIn, setUserLoggingIn] = useState({
    username: "",
    password: "",
    score: 0,
  });

  const handleNewUser = (e) => {
    const { name, value } = e.target;

    setUserLoggingIn((prevUser) => {
      return {
        ...prevUser,
        [name]: value.toLowerCase(),
      };
    });
  };
  
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2500));
  }
 

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const loading = () => setLoading(true);

  const login = (e) => {
    e.preventDefault();
    if(!isLoading){
      loading() 
    loginUser()
      .then((res) => {
        // console.log(res);
        let checkUser = res.data.filter(
          (e) =>
            e.username === userLoggingIn.username &&
            e.password === userLoggingIn.password
        );
        // if (logError){
        //     setLogError(null)}
        if (checkUser.length !== 0) {
          localStorage.setItem("LoggedUser", JSON.stringify(checkUser[0]));
          // history.push("/user");
          setTimeout(function(){ history.push("/user"); }, 2000);
        } else {
          setLogError("Wrong Username or Password");
          setUserLoggingIn({ username: "", password: "" });
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);

        setUserLoggingIn({ username: "", password: "" });
      });
    }
  };
  let classes = logError ? "placeholderRed" : "";
  return (
    <header id="home-section" style={{backgroundImage: `url(${loginImage})`}}>
      <div className="dark-overlay">

        
          <Container className='home-inner'>
          <Row className='LoginRow'>
            <Col lg={7} className='d-none d-lg-block'>
              <h1 className='display-3 loginText'>Lorem ipsum dolor sit.
              <strong>Lorem, ipsum.</strong>
              </h1>
              <div className='d-flex'>
                <div className='p-4 align-self-start'>
                <FontAwesomeIcon icon={ faCheck } className='fas'size='3x'/>
                </div>
                <div className='p-4 align-self-end  loginText'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, non expedita praesentium possimus repudiandae totam!
                </div>
              </div>

              <div className='d-flex'>
                <div className='p-4 align-self-start loginText'>
                <FontAwesomeIcon icon={ faCheck } className='fas'size='3x'/>
                </div>
                <div className='p-4 align-self-end loginText'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, non expedita praesentium possimus repudiandae totam!
                </div>
              </div>

              <div className='d-flex'>
                <div className='p-4 align-self-start'>
                <FontAwesomeIcon icon={ faCheck } className='fas 'size='3x'/>
                </div>
                <div className='p-4 align-self-end loginText'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, non expedita praesentium possimus repudiandae totam!
                </div>
              </div>
            </Col>

            <Col lg={5} className=' align-self-center'>
              <Card  bg='primary' text='center' className="card-form" >
                <Card.Body >
                  <h3><strong>Login</strong></h3>
                  <Form onSubmit={login}>
                    <Form.Group  className="p-2 ">
                      
                      <Form.Control
                        type="text"
                        size='lg'
                        placeholder={logError ? logError : "Enter Username"}
                        className={classes}
                        onChange={handleNewUser}
                        value={userLoggingIn.username}
                        name="username"
                      />
                    </Form.Group>

                    <Form.Group  className="p-2" >
                      
                      <Form.Control
                        name="password"
                        size='lg'
                        type="password"
                        placeholder="Password"
                        onChange={handleNewUser}
                        value={userLoggingIn.password}
                      />
                    </Form.Group>
                    <Form.Group className="p-2">
                      <Button variant="outline-light" block type="submit" disabled={isLoading}>
                      {isLoading ? 'Loading…' : 'Submit'}
                      </Button>
                    </Form.Group>
                    <Link className='linkovi' to='/register'>
                      <Form.Text className="p-2 ">
                        Not Registered? Click Here
                      </Form.Text>
                    </Link>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Container>
        
      </div>
    </header>
  );
};
