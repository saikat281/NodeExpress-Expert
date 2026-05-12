import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

export const productController = ((req: IncomingMessage, res: ServerResponse) => {


    const url = req.url;
    const method = req.method;

    // const products = [
    //     {
    //         id: 1,
    //         name: 'product -1'
    //     }
    // ];
    const products  = readProduct();

    if (url === '/products' && method === 'GET') {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({ message: "Tproducts retrives successfully", data: products }))
    }

})