/** @jsx jsx */

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { renderToReadableStream } from 'react-dom/server';

async function handler(request): Promise<Response> {
  const App = () => (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content={"width=device-width, initial-scale=1"} />
        <link rel="stylesheet" href="/styles.css"></link>
        <title>My app</title>
      </head>
      <body>
        <h1>Hello world!</h1>
        <script type="module" src="/readable-stream-boot.js"></script>
      </body>
    </html>
  );
  const stream = await renderToReadableStream(<App />, {
    bootstrapScripts: ['/main.js']
  });
  return new Response(stream, {
    headers: { 'content-type': 'text/html' },
  });
}
console.log("Listening on http://localhost:8000");
serve(handler);
