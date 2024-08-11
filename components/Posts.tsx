"use client";

import { PrismaClient, Post as PostType } from '@prisma/client';
import { Flex } from '@mantine/core';
import Post from 'components/Post';

const prisma = new PrismaClient()

export default async function Posts() {
    const posts: PostType[] = await prisma.post.findMany()

    return (
    <>
        <Flex direction={"row"} wrap={"wrap"} justify={"start"} gap="md" p="lg" >
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </Flex>
    </>
    );
}
