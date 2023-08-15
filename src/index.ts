import app from "./app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const port = process.env.PORT || 9000;
async function main(){
  app.listen(port, ()=> {
    console.log(`Server running at ${port}`)
  })
}

main();