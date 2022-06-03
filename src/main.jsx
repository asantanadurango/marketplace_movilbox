import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<App tab='home' />
	</BrowserRouter>
);
