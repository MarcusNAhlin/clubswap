import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function handleDELETE(req: NextRequest, res: NextResponse) {
    var { postId } = await req.json();

    const postDeleteRes = await deletePost(req, res, postId);

    return postDeleteRes;
}

async function deletePost(req: NextRequest, res: NextResponse, postId: number) {
    try {
        await prisma.post.delete({
            where: {
                id: postId,
            },
        });
        return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to delete post" }, { status: 500 });
    }
}

export { handleDELETE as DELETE };
