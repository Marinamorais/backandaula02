import { Router } from "express";
import {getCouser, getCouserById, createCouser, updateCouser, deleteCouser} from "../controllers/couser.controllers.js"

const couserRoutes = Router();


couserRoutes.get("/", getCouser)

couserRoutes.get("/:id", getCouserById)

couserRoutes.post("/", createCouser )

couserRoutes.put("/", updateCouser)

couserRoutes.delete("/:id", deleteCouser)

export default couserRoutes;