import {createServer} from "http"
import fs from "fs"

const data = fs.readFileSync("products.json","utf-8");
const products = JSON.parse(data).products;

const server = createServer((req, res) => {
    
    if(req.url.startsWith("/products")){
        let productId = req.url.split("/")[2];
        const product = products.find(p=>p.id === Number(productId));

        if(product){

            // console.log(product);
            let index = fs.readFileSync("index.html","utf-8");
            res.setHeader("Content-Type","text/html");
            index = index.replace("**Title**",(product.title).substring(0,30));
            index = index.replace("**Description**",(product.description).substring(0,100));
            index = index.replace("**Price**",`$ ${product.price}`);
            index = index.replace("**Url**",product.image);
            res.end(index);
            return;
        }
  
    }

    // switch(req.url){
    //     case "/":
    //         res.setHeader("Content-Type","text/html")
    //         res.end(index)
    //         break
    //     case "/product":
    //         res.setHeader("Content-Type","text/html")
    //         index = index.replace("**Title**",(product.title).substring(0,30));
    //         index = index.replace("**Description**",(product.description).substring(0,100));
    //         index = index.replace("**Price**",`$ ${product.price}`);
    //         index = index.replace("**Url**",product.image);
    //         res.end(index);
    //         break
    //     default:
    //         res.setHeader("Content-Type","text/html")
    //         res.end("<h1>404 Not Found</h1>")
        
    // }
})

server.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000/")
})