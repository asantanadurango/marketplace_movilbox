import { Link } from 'react-router-dom';
const BtnGoToCart = () => {
	return (
		<div className='position-fixed bottom-0 end-0 m-3'>
			<Link to={'/cart'} className='btn btn-primary'>
				Go to cart
			</Link>
		</div>
	);
};

export default BtnGoToCart;