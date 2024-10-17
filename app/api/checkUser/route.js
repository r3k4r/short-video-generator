// app/api/checkUser.js

import { prisma } from "@/lib/db";

export async function POST(req, res) {

    const { email, name, imageURL } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        await prisma.user.create({
          data: { name, email, imageURL },
        });
      }

      return new Response(JSON.stringify({ error: "Error checking/creating user" }), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error checking/creating user" }), {status: 500})
    }
  
}
