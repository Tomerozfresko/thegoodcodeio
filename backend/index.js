import express from "express";
import itemRoutes from "./routes/item.js";
import cors from "cors";

const app = express();

//Define our port to 4200
const PORT = 4200;


//Allowing CORS permissions
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//Parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());


//Define middlewares for /api/items
app.use("/api/items", itemRoutes);

//Activate Server
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
