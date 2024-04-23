//here we create prisma client to use the models we defined in schems.prisma file.
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
