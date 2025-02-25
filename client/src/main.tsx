// import ReactDOMClient from 'react-dom/client'
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import LinePlot from './tests/D3Examlpe.tsx'

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
    <StrictMode>
        <LinePlot />
    </StrictMode>
)
