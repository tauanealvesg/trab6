import express from "express";
import { getPet, deletePet, addPet, updatePet,} from "../controllers/controlpet.js"

const routerPet = express.Router();

routerPet.get("/pet", getPet);

routerPet.post("/pet", addPet)

routerPet.put("/pet/:id", updatePet)

routerPet.delete("/pet/:id", deletePet)

export default routerPet;