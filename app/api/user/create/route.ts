// import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "next-auth";
// import { authOptions } from "lib/authOptions";
// import { NextRequest, NextResponse } from "next/server";

// async function handlePOST(req: any, res: any) {
//     return await createUserHandler(req, res);
// }

// function handleGET(req: NextRequest, res: NextResponse) {
//   return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
// }


// // function to create user in our database
// async function createUserHandler(req: NextRequest, res: NextResponse) {
//   const session = await getServerSession(authOptions);

//   if (!session || !session.user?.email) {
//     return NextResponse.json({ message: "User not logged in or session not found" }, { status: 401 });
//   }

//   const { email, name } = session.user;

//   try {
//     const prisma = new PrismaClient();

//     await prisma.user.create({
//       data: {
//         email: email as string,
//         name: name as string,
//       },
//     });

//     return NextResponse.json({ message: "User created" }, { status: 200 });
//   } catch (error) {
//     console.log("Error creating user: ", error);
//     return NextResponse.json({ message: "Error creating user" }, { status: 401 });
//   }
// }

// export { handleGET as GET, handlePOST as POST };
