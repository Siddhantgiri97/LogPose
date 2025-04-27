import React from 'react'
import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavbarWrap = () => {
    return (
        <>
            <Navbar expand="lg" className={`${styles.mainNav} bg-body-tertiary`} bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand className={styles.navbarbrand} href="#home">Log Pose</Navbar.Brand>
                    <Navbar.Toggle className={styles.navbartoggler} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto py-4 py-lg-0">
                            <Nav.Link className={styles.navlink} href="#home">Home</Nav.Link>
                            <Nav.Link className={styles.navlink} href="#link">Products</Nav.Link>
                            <Nav.Link className={styles.navlink} href="#link">Request Quote</Nav.Link>
                            <Nav.Link className={styles.navlink} href="#link">Contact US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarWrap