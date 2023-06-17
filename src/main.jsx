import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './style/main.css'
import { Provider } from 'react-redux'
import { store } from './App/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
