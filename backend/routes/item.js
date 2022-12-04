import express from "express";
import { getItems, addItem, deleteItem } from "../controllers/item.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", addItem);
router.delete("/:id", deleteItem);

export default router;
