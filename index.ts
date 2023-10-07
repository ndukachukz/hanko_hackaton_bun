require("dotenv").config();

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const endpoints = new URL(req.url).pathname;
    switch (endpoints) {
      case "/":
        return new Response("ENDPOINT");
      default:
        return new Response(undefined, {
          status: 404,
        });
    }
  },
  error(req) {},
});

console.log(`Listening on http://localhost:${server.port} ...`);
