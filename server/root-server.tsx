import { Application } from "jsr:@oak/oak/application"
import { Router } from "jsr:@oak/oak/router"
import routeStaticFilesFrom from "./util/routeStaticFilesFrom.ts"
import ReactDOMServer from 'react-dom/server'
import App from "./StaticRootApp.jsx"
export const app = new Application()

const router = new Router()
app.use(router.routes())
app.use(routeStaticFilesFrom([
    `${Deno.cwd()}/client/dist`,
    `${Deno.cwd()}/client/public`,
]))

// app.use(async (ctx, next) => {
//     try {
//         const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
//             bootstrapScripts: `${Deno.cwd()}/hydrate-root.js`,
//             onShellReady() {
//                 ctx.response.headers.set('content-type', 'text/html')
//                 pipe(ctx.response.body)
//             },
//         })
//     } catch {
//         await next()
//     }
// })

app.use(async (context, next) => {
    try {
        await context.send({
            root: `../${Deno.cwd()}/client/dist`,
            index: "index.html",
        })
    } catch {
        await next()
    }
})

if (import.meta.main) {
    console.log("Server listening on port http://localhost:8000")
    await app.listen({ port: 8000 })
}
