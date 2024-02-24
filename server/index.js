const http = require("http");
const { WebSocketServer } = require("ws");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8080;

server.listen(port, () => {
  console.log(`WebSocket server running on port ${port}`);
});
