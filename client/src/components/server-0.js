// server.tsx
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { App } from './app.tsx'

const port = Number.parseInt(process.env.PORT || '3000', 10)
const app = express()

// app.use('/', (_, res) => {
//   const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
//     bootstrapScripts: ['/main.js'],
//     onShellReady() {
//       res.setHeader('content-type', 'text/html')
//       pipe(res)
//     },
//   })
// })

app.listen(port, () => {
    console.log(`Server is listening at ${port}`)
})
