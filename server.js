import "dotenv/config";
import app from "./src/app.js";
import http from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => console.log( `Servidor escutando na porta ${port}` ));

const io = new Server(server);

export default io