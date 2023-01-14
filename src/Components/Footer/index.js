import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="https://instagram.com/_ujjwal_walia?igshid=ZDdkNTZiNTM=" target="_blank">
                                        <BsInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/ujjwalw3/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://twitter.com/UjjwalWalia15" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://stackoverflow.com/users/20446404/ujjwal-walia" target="_blank">
                                        <BsStackOverflow />
                                    </a>
                                </li>
                               
                                <li>
                                    <a rel="noreferrer" href="https://github.com/ujjwal0" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>2022. Developed and Designed  by <a href="https://www.youtube.com/c/AzadMalikRohit" target="_blank" rel="noreferrer">Ujjwal Walia,Rohit Jaiswal,Rohan Singh</a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;
