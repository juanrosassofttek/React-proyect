import React from 'react'
//import { Navbar, Nav , NavDropdown, Container, } from 'react-bootstrap'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './app.css'
import Policy from '../policies/policy'
import Claim from '../claims/claim'

class App extends React.Component {  

    render() {
        return (
            // <Navbar bg="light" expand="lg">
            //     <Nav className="mr-auto" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            //         <Nav.Link >Polizas</Nav.Link>
            //         <Nav.Link >Reclamos</Nav.Link>
            //     </Nav>
            // </Navbar>
            <Container>
                {/* <Row>
                    <Col>
                        <Button variant="primary" className = "button">Polizas</Button>
                        <Button variant="primary">Reclamos</Button>    
                    </Col>
                </Row> */}
                <BrowserRouter>
                    <div>
                        <Link to="/">Polizas </Link>
                        <Link to="/claims"> Reclamos</Link>
                        <Route path="/" exact component={Policy} ></Route>
                        <Route path="/claims" component={Claim} ></Route>
                      
                    </div>
                </BrowserRouter>
                
                
                {/* <Row>
                    <Col>
                        <Button variant="primary" className = "button">Polizas</Button>
                        <Button variant="primary">Reclamos</Button>    
                    </Col>
                </Row>
                <Row>
                    <Policy />
                </Row>
                <Row>
                    <Claim />
                </Row> */}
            </Container>
            

        )

    }
}

export default App