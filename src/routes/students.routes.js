import { Router } from "express";
import{
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    

} from "../controllers/students.controller.js";

const studentsRoutes = Router();

studentsRoutes.get("/", getStudents);

studentsRoutes.post("/", createStudent);

studentsRoutes.put("/:id", updateStudent);

studentsRoutes.delete("/:id", deleteStudent);

export default studentsRoutes;