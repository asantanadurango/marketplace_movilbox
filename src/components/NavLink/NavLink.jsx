import { NavLink as NavLinkBootstrap } from 'react-router-dom';
const NavLink = ({ to, children }) => {
	return (
		<NavLinkBootstrap className={({ isActive }) => 'nav-link mx-3 ' + (isActive ? ' text-info fw-bolder' : null)} to={to}>
			{children}
		</NavLinkBootstrap>
	);
};

export default NavLink;
