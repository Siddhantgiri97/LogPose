import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 shadow-top">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>We provide innovative solutions to modern problems.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="#products" className="text-white text-decoration-none">Products</a></li>
                            <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <p>Email: info@example.com<br />Phone: +91-1234567890</p>
                    </Col>
                </Row>
                <hr className="border-top border-light mt-4" />
                <p className="text-center mb-0">© {new Date().getFullYear()} Log Pose Instruments. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
