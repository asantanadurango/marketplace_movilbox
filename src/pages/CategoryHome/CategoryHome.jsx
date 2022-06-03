import ProductList from '../../components/ProductList/ProductList.jsx';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CategoryHome = ({ data = [], action, cart }) => {
	const { query } = useParams();
	const title = query ? query : 'All products';
	return (
		<Container>
			<h1>{title}</h1>
			<ProductList data={data} action={action} btnText={'Add to Card'} cart={cart} />
		</Container>
	);
};

export default CategoryHome;
