import { Navbar, Container, Nav } from 'react-bootstrap';
import NavLink from '../NavLink/NavLink.jsx';
const NavBar = ({ categorys }) => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Nav>
					<NavLink to={'/'}>Marketplace</NavLink>
				</Nav>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='col d-flex justify-content-end'>
						{categorys.map(category => (
							<NavLink to={`/${category}`} key={category}>
								{category[0].toUpperCase() + category.substring(1)}
							</NavLink>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
