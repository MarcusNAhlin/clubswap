"use client";

import { Button } from '@mantine/core';
import { signIn, signOut, useSession } from "next-auth/react";
import React from 'react';

export default function LoginForm() {

  const { data: session } = useSession();

    return (
    <>
    {
        session ? <>
          <p>Welcome, {session.user?.name}!</p>

          <Button onClick={() => signOut()}>Sign out</Button>

        </> : <>
          <Button
            onClick={() => signIn("google")}
          >
            Sign in with google
          </Button>
        </>
    }

    </>
    );
  }
