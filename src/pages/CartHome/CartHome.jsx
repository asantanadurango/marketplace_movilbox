import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import InvoiceTable from '../../components/InvoiceTable/InvoiceTable';

const CartHome = ({ data = [], removeItemToCart }) => {
	useEffect(() => window.scrollTo(0, 0), []);
	return (
		<Container>
			<h1>Cart</h1>
			<InvoiceTable data={data} removeItemToCart={removeItemToCart} />
		</Container>
	);
};

export default CartHome;
