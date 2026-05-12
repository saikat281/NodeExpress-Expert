import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";

export const routHandler = (req: IncomingMessage, res: ServerResponse) => {
    
    
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        // console.log('This is Root route');
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "This is root route" }))
    }
    else if (url?.startsWith('/products') ) {
       productController(req,res);
    }
    else {
        // console.log('This is Root route');
        res.writeHead(404, { "content-type": "text/plain" }) 
        res.end(JSON.stringify({ message: "route not found" }))
    }
}