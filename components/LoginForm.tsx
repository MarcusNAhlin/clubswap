"use client";

import { useForm } from '@mantine/form';
import { Input, TextInput, PasswordInput, Flex, Group, Button } from '@mantine/core';
import { signIn, useSession } from "next-auth/react";
import React from 'react';
import { json } from 'stream/consumers';

export default function LoginForm() {

  const { data: session } = useSession();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '', password: ''
        },

        validate: {
          email: (value) => (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ? null : 'Invalid email'),
          password: (value) => (value.length < 6 ? 'Password must have at least 6 characters' : null),
        },
      });

      async function handleSubmit(event: React.FormEvent, values: { email: string, password: string }) {
        event.preventDefault();

        try {
          let res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
            redirect: false,
          });

          if (res?.ok) {
            // toast success
            console.log("success");
            return;
          } else {
            // Toast failed
            // setError("Failed! Check your input and try again.");
            console.log("Failed");
            console.log(res);
          }
        } catch (error) {
          console.error("An error occurred during sign-in:", error);
          // Optionally, display an error message to the user
          // setError("An unexpected error occurred. Please try again later.");
        }
      }

    return (
    <>
    {
        session ? <><p>You are logged in!</p>
        <p>{JSON.stringify(session)}</p></> : <p>You are not logged in!</p>
    }
    {/* <Flex justify={"center"}>
        <form onSubmit={(event) => handleSubmit(event, form.getValues())} style={{
            width: "400px"
        }}>
            <TextInput
                label="Email"
                placeholder="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
                />
            <PasswordInput
            label="Password"
            placeholder="Password"
            key={form.key('password')}
            {...form.getInputProps('password')}
            />
            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    </Flex> */}
    <Button
      onClick={() => signIn("google")}
    >
      Sign in with google
    </Button>
    </>
    );
  }
