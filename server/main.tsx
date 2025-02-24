import { Application } from "jsr:@oak/oak/application"
import { Router } from "jsr:@oak/oak/router"
import ReactDOMServer from 'react-dom/server'
import App from "./StaticRootApp.jsx"

const books = new Map<string, any>()
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
})

const router = new Router()
router
  .get("/", (context) => {
    context.response.body = "Hello world!"
  })

  .get("/static/root", async (context, next) => {
    try {
      const { pipe } = ReactDOMServer.renderToPipeableStream(<App />, {
        bootstrapScripts: `${Deno.cwd()}/hydrate-root.js`,
        onShellReady: () => {
          context.response.headers.set('content-type', 'text/html')
          pipe(context.response.body)
        },
      })
      await next()
    }
    catch {
      await next()
    }
  })

  .get("/static/doc", (context) => {
    context.response.body = Array.from(books.values())
  })

  .get("/book/:id", (context) => {
    if (books.has(context?.params?.id)) {
      context.response.body = books.get(context.params.id)
    }
  })

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

if (import.meta.main) {
  console.log("Server listening on port http://localhost:8000")
  await app.listen({ port: 8000 })
}
