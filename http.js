const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome To Home Page");
  }
  if (req.url === "/about") {
    res.end("About Page");
  }
  res.end(`
  <h1>Oops....!</h1>
  <p>you have entered into wrong path</p>
  <a href="/">Back To Home</a>`);
});
server.listen(5000);
