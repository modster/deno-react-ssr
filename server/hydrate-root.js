// hydrate - root.js
import './styles.css'
import { hydrateRoot } from 'react-dom/client'
import App from './App.js'

hydrateRoot(
    document.getElementById('root'),
    <App />
)