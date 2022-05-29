import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

import {Link} from 'react-router-dom'


const appName = "MIREN"

const styles = {
    header: {
        minHeight: 50,
        position: "fixed",
        width: "100%",
    },
    nav: {
        marginLeft: 50
    },
    navBrand: {
        fontSize: 22,
    },
    navLink: {
        marginLeft: 10,
        fontSize: 18,
    },
    container: {
        marginBottom: 100,
    }
}

class Header extends React.Component {
    render() {
        return (
            // <div>
            //     <nav>
            //         <Link to="/">Home</Link> |{" "}
            //         <Link to="/tops">Top</Link>
            //     </nav>
            // </div>



            <div style={{paddingTop: 60}}>
                <Navbar expand="lg" variant='light' fixed="top" style={{backgroundColor: "#FCE3DE", padding: 0}}>
                    <Container>
                    <Navbar.Brand as={Link} to="/" style={styles.navBrand} >
                        {appName}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                        <Nav.Link as={Link} to="/tops" style={styles.navLink} >Top</Nav.Link>
                        <Nav.Link href="#" style={styles.navLink}>Bottom</Nav.Link>
                        <Nav.Link href="#" style={styles.navLink}>Outerwear</Nav.Link>
                        <Nav.Link href="#" style={styles.navLink}>Accessories</Nav.Link>
                        <Nav.Link href="#" style={styles.navLink}>Outfit</Nav.Link>
                        <Nav.Link href="#" style={styles.navLink}>Shoes</Nav.Link>
                        <NavDropdown title="Options" id="basic-nav-dropdown" style={styles.navLink}>
                            <NavDropdown.Item href="#action/3.1" >Brands</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >Categories</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header