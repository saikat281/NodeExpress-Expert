import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { routHandler } from "./routes/route";


const server: Server = createServer((req: IncomingMessage, res : ServerResponse) => {
    // console.log(req.url);  '/', '/user', '/products'
    // console.log(req.method); GET,POST,DELETE

    routHandler(req,res); 

   
})

server.listen(5000, () => {
    console.log("Server is Running on port 5000");
});