
import { useState, useEffect } from "react"

export default function TestRehydrate() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <h1>
            {isClient ? 'Is Client' : 'Is Server'}
        </h1>
    )
}






/*
// index.js 
import './styles.css'
import { hydrateRoot } from 'react-dom/client'
import App from './App.js'

hydrateRoot(document.getElementById('root'), <App />)
 */