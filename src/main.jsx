import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Provider } from 'react-redux'
import './Styles/Global.css';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>
)
