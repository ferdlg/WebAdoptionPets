import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/base/_index.css';
import './assets/styles/utils/_variables.css';
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>

)
