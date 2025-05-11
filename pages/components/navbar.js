import React from 'react'
import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Logo from "../../public/LOGPOSE.png"



const NavbarWrap = () => {
    return (
        <>
            <Navbar expand="lg" className={`${styles.mainNav} bg-body-tertiary shadow p-3 mb-5 bg-body rounded-bottom justify-content-end flex-grow-1`} fixed="top">
                <Container>
                    <Navbar.Brand href={`/`} className={styles.navbarbrand}>
                        <Image
                            src={Logo}
                            className={`${styles.logo} d-inline-block align-top ms-2`}
                            alt="LogPose logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle className={styles.navbartoggler} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`ms-auto py-4 py-lg-0 g-2`}>
                            <Nav.Link className={`${styles.navlink} ps-2`} href={`/`}>Home</Nav.Link>
                            <Nav.Link className={`${styles.navlink} ps-2`} href={`/products`}>Products</Nav.Link>
                            <Nav.Link className={`${styles.navlink} ps-2`} href={`/quote`}>Request Quote</Nav.Link>
                            <Nav.Link className={`${styles.navlink} ps-2`} href={`/contact`}>Contact US</Nav.Link>
                            <Nav.Link className={`${styles.navlink} ps-2`} href={`/careers`}>Careers</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default NavbarWrap