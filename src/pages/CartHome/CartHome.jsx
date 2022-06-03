import { Container } from 'react-bootstrap';
// import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
const CartHome = ({ data = [], action }) => {
	useEffect(() => window.scrollTo(0, 0), []);

	return (
		<Container>
			<h1>Cart</h1>
			<ProductList data={data} action={action} btnText={'remove'} />
		</Container>
	);
};

export default CartHome;
