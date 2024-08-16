"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { Button, Flex, Text } from "@mantine/core";
import { useState } from "react";

export default function AccountHeader() {
    const { data: session } = useSession();

    const [loading, setLoading] = useState(false);

    function handleSignOut() {
        setLoading(true);
        signOut();
    }

    function handleSignIn(provider: string) {
        setLoading(true);
        signIn(provider);
    }

    return (
    <>
        {
            session ? <>
                <Flex align="center" gap="md" mr="md" mt="md" justify="end" pos="absolute" top="0" right="0">
                    <Text m="0">{session.user?.name}</Text>
                    {
                        loading ?
                        <Button loading loaderProps={{ type: 'dots' }} w={"12rem"}></Button>
                        :
                        <Button
                        color="red"
                            onClick={() => handleSignOut()}
                            w={"12rem"}
                            >
                            Sign out
                        </Button>
                    }
                </Flex>
            </> : <>
                <Flex align="center" gap="md" mr="md" mt="md" justify="end" pos="absolute" top="0" right="0">
                    {
                    loading ?
                        <Button loading loaderProps={{ type: 'dots' }} w={"12rem"}></Button>
                    :
                        <Button
                            color="green"
                            onClick={() => handleSignIn("google")}
                            w={"12rem"}
                            >
                            Sign in with Google
                        </Button>
                    }
                </Flex>
            </>
        }
    </>
    );
}
