import GrupedSpan from '../GrupedSpan/GrupedSpan';
import { Card, Button } from 'react-bootstrap';
import BtnChecked from './../BtnChecked/BtnChecked';
const ProductCard = ({ id, name, price, isGrouped, img, category, addToCart, existOnCart = false }) => {
	const prod = { id, name, price, isGrouped, img, category };
	return (
		<li className='col d-flex justify-content-center mb-3'>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						Price:
						<strong> {price} $</strong>
					</Card.Text>
					<Card.Text>
						Grouped: <GrupedSpan isGrouped={isGrouped} />
					</Card.Text>
					<Card.Text>Category: {category}</Card.Text>
					<div className='text-center'>
						{existOnCart ? (
							<BtnChecked />
						) : (
							<Button
								variant='primary'
								className='col w-auto'
								onClick={() => {
									addToCart(prod);
								}}>
								Add To Cart
							</Button>
						)}
					</div>
				</Card.Body>
			</Card>
		</li>
	);
};

export default ProductCard;
