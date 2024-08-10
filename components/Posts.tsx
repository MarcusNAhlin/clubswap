"use client";

import { PrismaClient, Post as PostType } from '@prisma/client';
import Post from './Post';

const prisma = new PrismaClient()

export default async function Posts() {
    const posts: PostType[] = await prisma.post.findMany()

    return (
    <>
        {posts.map(post => (
            <Post key={post.id} post={post} />
        ))}
    </>
    );
  }
