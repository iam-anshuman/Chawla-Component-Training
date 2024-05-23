import express,{Request,Response} from "express";
import route from "./Routes/routes";
import connection from "./config/db";


const app = express();

connection();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',route);

app.get("/", (req:Request, res:Response) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});