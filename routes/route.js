import express from "express";
import { saveSentEmail,getEmails } from "../controller/email-controller.js";
const routes=express.Router();
routes.post("/save",saveSentEmail)
routes.get("/emails/:type",getEmails)
routes.post("/save-draft",saveSentEmail)
export default routes;