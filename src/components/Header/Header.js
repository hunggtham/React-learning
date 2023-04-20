
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='navbar' bg="light" expand="lg">
            <Container>
                <NavLink className='navbar-brand' to="/">MinhHieu</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/users" className="nav-link">User</NavLink>
                        <NavLink to="/admins" className="nav-link">Admin</NavLink>

                    </Nav>
                    <Nav>
                        <button className='btn-login'>Login</button>
                        <button className='btn-signup'>SignUp</button>
                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>
                                Log Out
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                Profile
                            </NavDropdown.Item> */}
                        {/* chưa cần đến */}
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                        {/* </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;