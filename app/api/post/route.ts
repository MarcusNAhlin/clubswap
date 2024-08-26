import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "lib/authOptions";
import { NextRequest, NextResponse } from "next/server";

async function handlePOST(req: NextRequest, res: NextResponse) {
    return await createPostHandler(req, res);
}

async function createPostHandler(req: NextRequest, res: NextResponse) {

    try {
        var session = await getServerSession(authOptions);
    } catch (error) {
        return NextResponse.json({ message: "Error getting session" }, { status: 401 });
    }

    if (!session || !session.user?.email) {
        return NextResponse.json({ message: "User not logged in or session not found" }, { status: 401 });
    }

    const { email } = session.user;

    try {
        var data = await req.json();
    } catch (error) {
        return NextResponse.json({ message: "Error parsing request" }, { status: 401 });
    }

    try {
        var prisma = new PrismaClient();
    } catch (error) {
        return NextResponse.json({ message: "Error connecting to database" }, { status: 401 });
    }

    try {
        var user = await prisma.user.findUnique({
            where: {
                email: email as string,
            },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error finding user" }, { status: 401 });
    }

    console.log(data);
    console.log(user);

    try {
        var category = await prisma.category.findFirst({
            where: {
                name: "club",
            },
        });

        if (!category) {
            return NextResponse.json({ message: "Category not found" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error finding category" }, { status: 401 });
    }

    try {
        await prisma.post.create({
            data: {
                user_id: user.id,
                title: data.title,
                description: data.description,
                pickup_location: data.pickup_location,
                price_sek: data.price,
                brand: data.brand,
                shaft: data.shaft_flex,
                category_id: category.id,
            },
        });
    } catch (error) {
        return NextResponse.json({ message: "Error creating post" }, { status: 401 });
    }

    return NextResponse.json({ message: "Post created" }, { status: 200 });
}

export { handlePOST as POST };
