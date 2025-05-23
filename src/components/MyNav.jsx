import {Navbar, Container, Nav} from "react-bootstrap"

function MyNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top mb-5">
            <Container>
                <Navbar.Brand href="#">Epibooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default MyNav;