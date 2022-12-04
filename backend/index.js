import express from "express";
import itemRoutes from "./routes/item.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 4200;

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

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/items", itemRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
