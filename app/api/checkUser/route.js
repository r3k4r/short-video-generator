import { prisma } from "@/lib/db";

export async function POST(req) {
  const { email, name, imageURL } = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          email,
          name,
          imageURL,
        },
      });
    }

    // Send success response if user found or created successfully
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error in /api/checkUser:", error);  // Log detailed error information
    return new Response(JSON.stringify({ error: "Error checking/creating user" }), { status: 500 });
  }
}
