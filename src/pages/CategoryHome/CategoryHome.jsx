import ProductList from '../../components/ProductList/ProductList.jsx';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CategoryHome = ({ data = [], cart, addToCart }) => {
	const { query } = useParams();
	const title = query ? query : 'All products';
	return (
		<Container>
			<h1>{title}</h1>
			<ProductList data={data} addToCart={addToCart} cart={cart} />
		</Container>
	);
};

export default CategoryHome;
