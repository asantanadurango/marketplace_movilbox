// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function BtnCart() {
	return (
		<div className='position-fixed bottom-0 end-0 m-3'>
			<Link to={'/cart'} className='btn btn-primary'>
				Go to cart
			</Link>
		</div>
	);
}
