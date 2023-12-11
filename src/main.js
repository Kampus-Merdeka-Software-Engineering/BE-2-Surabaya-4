import {web} from "./application/web.js";
import {logger} from "./application/logging.js";
import { application } from "express";

web.listen(3000, ()=>{
    logger.info("app start")
})

application.listen(process.env.PORT||3000, ()=>{
    console.log('Server is running on 3000!')
})