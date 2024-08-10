"use client";

export default async function Posts({ post }) {

    return (
    <>
    <div key={post.id}>
        <h1>{post.title}</h1>
    </div>
    </>
    );
  }
