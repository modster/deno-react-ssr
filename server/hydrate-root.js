// hydrate - root.js
import './styles.css'
import { hydrateRoot } from 'react-dom/client'
import App from './StaticRootApp.jsx'

hydrateRoot(
    document.getElementById('root'),
    <App />
)