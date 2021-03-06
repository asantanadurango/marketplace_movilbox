import { useState, useEffect } from 'react';
import CategoryHome from './pages/CategoryHome/CategoryHome.jsx';
import CartHome from './pages/CartHome/CartHome.jsx';
import initialCalled from './Helpers/initialCalled.js';
import Spinner from './components/Spinner/Spinner.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import BtnGoToCart from './components/BtnGoToCart/BtnGoToCart.jsx';
function App() {
	const [data, setData] = useState([]);
	const [cart, setCart] = useState([]);
	const categorys = [...new Set(data.map(p => p.category))];
	const cartPath = useLocation().pathname;
	let showBtnGoToCart = cart.length > 0 && cartPath !== '/cart';

	const handleAddToCart = prod => (cart.length === 0 ? setCart([prod]) : cart.every(e => e.id !== prod.id) && setCart([...cart, prod]));
	const handleDeleteToCart = prod => setCart(cart.filter(e => e.id !== prod.id));

	useEffect(() => {
		initialCalled(setData);
	}, []);

	return (
		<>
			<NavBar categorys={categorys} />
			<Routes>
				<Route
					path='/'
					element={
						data.length === 0 ? (
							<Spinner animation={'border'} color={'light'} />
						) : (
							<CategoryHome data={data} cart={cart} addToCart={handleAddToCart} />
						)
					}
				/>
				<Route path={`/:query`} element={<CategoryHome data={data} cart={cart} addToCart={handleAddToCart} />} />
				<Route
					path={`/cart`}
					element={
						cart.length > 0 ? <CartHome data={cart} removeItemToCart={handleDeleteToCart} /> : <Navigate to='/' />
					}
				/>
			</Routes>
			{showBtnGoToCart && <BtnGoToCart />}
		</>
	);
}

export default App;
