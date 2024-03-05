import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './main.module.css';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
